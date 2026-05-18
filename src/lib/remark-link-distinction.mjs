import { visit } from 'unist-util-visit';

export function remarkLinkDistinction() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      const isInternal = node.data?.hProperties?.className?.includes('internal-link') || 
                        (!node.url?.startsWith('http://') && !node.url?.startsWith('https://'));
      
      if (!node.data) node.data = {};
      if (!node.data.hProperties) node.data.hProperties = {};
      if (!node.data.hProperties.className) node.data.hProperties.className = [];
      if (typeof node.data.hProperties.className === 'string') {
        node.data.hProperties.className = [node.data.hProperties.className];
      }

      if (isInternal) {
        if (!node.data.hProperties.className.includes('internal-link')) {
          node.data.hProperties.className.push('internal-link');
        }
      } else {
        if (!node.data.hProperties.className.includes('external-link')) {
          node.data.hProperties.className.push('external-link');
        }
        node.data.hProperties.target = '_blank';
        node.data.hProperties.rel = 'noopener noreferrer';

        // Get text content from all text children
        const textParts = [];
        node.children.forEach(child => {
          if (child.type === 'text') {
            textParts.push(child.value);
          }
        });
        
        const textContent = textParts.join('');
        
        console.log('[remark-link-distinction] External link:', node.url, 'textContent:', textContent, 'children:', node.children.length);
        
        if (textContent) {
          // Replace children with wrapped text + icon
          node.children = [
            {
              type: 'html',
              value: `<span class="link-text">${textContent}</span>`
            },
            {
              type: 'html',
              value: '<span class="sr-only">(opens in a new tab)</span>'
            },
            {
              type: 'html',
              value: '<span class="link-icon material-symbols-outlined" style="font-size: 14px; vertical-align: middle; margin-left: 0.25rem; opacity: 0.6; display: inline-block;">open_in_new</span>'
            }
          ];
          console.log('[remark-link-distinction] Replaced children, new count:', node.children.length);
        }
      }
    });
  };
}
