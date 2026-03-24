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

        const hasSrOnlyText = node.children.some(child => 
          child.type === 'html' && child.value.includes('sr-only')
        );

        if (!hasSrOnlyText && node.children.length > 0) {
          node.children.push({
            type: 'html',
            value: '<span class="sr-only">(opens in a new tab)</span>'
          });
        }
      }
    });
  };
}
