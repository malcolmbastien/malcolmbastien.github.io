import { visit } from 'unist-util-visit';

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
