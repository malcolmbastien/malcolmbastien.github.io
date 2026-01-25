import { visit } from 'unist-util-visit';

export function remarkCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      const firstChild = node.children[0];
      if (!firstChild || firstChild.type !== 'paragraph') return;

      const firstText = firstChild.children[0];
      if (!firstText || firstText.type !== 'text') return;

      const match = firstText.value.match(/^\[!([\w\s-]+)\]/i);
      if (!match) return;

      const rawType = match[1];
      const type = rawType.toLowerCase().trim().replace(/\s+/g, '-');
      
      // Update the node's properties
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.className = ['markdown-alert', `markdown-alert-${type}`];

      // Remove the [!TYPE] text
      firstText.value = firstText.value.replace(/^\[!([\w\s-]+)\]/i, '').trim();

      // If the paragraph is now empty, or just had the [!TYPE], we might want to add a title
      let titleText = rawType.trim().toUpperCase();
      if (type === 'wip' || type === 'work-in-progress') titleText = 'WORK IN PROGRESS';
      
      const titleNode = {
        type: 'paragraph',
        data: {
          hProperties: { className: ['markdown-alert-title'] }
        },
        children: [{ type: 'text', value: titleText }]
      };

      // Insert title at the beginning
      node.children.unshift(titleNode);
    });
  };
}
