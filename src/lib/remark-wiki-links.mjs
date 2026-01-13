import { visit } from 'unist-util-visit';

export function remarkWikiLinks() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!node.value) return;
      if (parent && (parent.type === 'link' || parent.type === 'image')) return;

      // Match wiki-style links: [[link-text]] or [[link-text|display-text]]
      const wikiLinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
      
      const newChildren = [];
      let lastIndex = 0;
      let match;

      while ((match = wikiLinkRegex.exec(node.value)) !== null) {
        const [fullMatch, linkText, displayText] = match;
        const matchIndex = match.index;

        // Skip if preceded by ! (it's a standard markdown image)
        if (matchIndex > 0 && node.value[matchIndex - 1] === '!') {
          continue;
        }

        // Add text before the link
        if (matchIndex > lastIndex) {
          newChildren.push({
            type: 'text',
            value: node.value.slice(lastIndex, matchIndex)
          });
        }

        // Generate slug from link text
        const slug = linkText
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');

        // Create link node
        const linkNode = {
          type: 'link',
          url: `/posts/${slug}`,
          title: linkText,
          data: {
            hProperties: {
              className: 'internal-link'
            }
          },
          children: [{
            type: 'text',
            value: displayText || linkText
          }]
        };

        newChildren.push(linkNode);
        lastIndex = matchIndex + fullMatch.length;
      }

      if (newChildren.length === 0) return;

      // Add remaining text
      if (lastIndex < node.value.length) {
        newChildren.push({
          type: 'text',
          value: node.value.slice(lastIndex)
        });
      }

      // Replace the current text node
      parent.children.splice(index, 1, ...newChildren);
    });
  };
}
