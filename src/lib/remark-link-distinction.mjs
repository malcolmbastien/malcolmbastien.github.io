import { visit } from 'unist-util-visit';

export function remarkLinkDistinction() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      // Determine if it's an internal link
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
      }

      // Wrap children in a span to allow targeted underlining (excluding the ::after icon)
      // We use 'emphasis' as a base Mdast type but override it with 'span' via hName
      const isAlreadyWrapped = node.children.length === 1 && 
                               (node.children[0].data?.hProperties?.className?.includes('link-text') ||
                                node.children[0].data?.hName === 'span');

      if (!isAlreadyWrapped && node.children.length > 0) {
        const originalChildren = [...node.children];
        node.children = [{
          type: 'emphasis',
          data: {
            hName: 'span',
            hProperties: { 
              className: ['link-text'],
              style: 'font-style: inherit;'
            }
          },
          children: originalChildren
        }];
      }
    });
  };
}
