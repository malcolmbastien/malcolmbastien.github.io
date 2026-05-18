import { visit } from 'unist-util-visit';
import fs from 'fs';
import path from 'path';

const imageMetaCache = new Map();

function getImageMeta(filePath) {
  if (imageMetaCache.has(filePath)) {
    return imageMetaCache.get(filePath);
  }
  
  try {
    const stats = fs.statSync(filePath);
    const result = { exists: true, size: stats.size };
    imageMetaCache.set(filePath, result);
    return result;
  } catch {
    imageMetaCache.set(filePath, { exists: false });
    return { exists: false };
  }
}

export function rehypeOptimizeImages() {
  return (tree) => {
    let imageIndex = 0;
    
    visit(tree, 'element', (node) => {
      if (node.tagName === 'img') {
        imageIndex++;
        
        const src = node.properties?.src;
        if (!src) return;
        
        // Skip external images
        if (src.startsWith('http') || src.startsWith('//')) return;
        
        // First image loads eagerly with high priority
        if (imageIndex === 1) {
          node.properties.fetchpriority = 'high';
          node.properties.loading = 'eager';
        } else {
          node.properties.loading = 'lazy';
          node.properties.decoding = 'async';
        }
        
        // Add class for fade-in animation
        const existingClass = node.properties.className || '';
        node.properties.className = `${existingClass} optimized-img`.trim();
      }
    });
  };
}
