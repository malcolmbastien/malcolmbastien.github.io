import { visit } from 'unist-util-visit';

const iconMap = {
  note: 'sticky_note_2',
  info: 'info',
  important: 'priority_high',
  todo: 'check_circle',
  abstract: 'description',
  summary: 'description',
  tldr: 'description',
  success: 'celebration',
  tip: 'lightbulb',
  hint: 'lightbulb',
  idea: 'lightbulb',
  done: 'check_circle',
  check: 'check_circle',
  warning: 'warning',
  caution: 'warning',
  attention: 'warning',
  failure: 'cancel',
  fail: 'cancel',
  missing: 'cancel',
  danger: 'local_fire_department',
  error: 'error',
  bug: 'pest_control',
  example: 'auto_stories',
  quote: 'format_quote',
  cite: 'format_quote',
  draft: 'stylus_note',
  wip: 'construction',
  'work-in-progress': 'construction',
  question: 'help',
  help: 'help',
  faq: 'help'
};

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
      const icon = iconMap[type] || 'info';
      
      // Remove the [!TYPE] marker
      firstText.value = firstText.value.replace(/^\[!([\w\s-]+)\]/i, '').trim();

      let titleText = rawType.trim().toUpperCase();
      if (type === 'wip' || type === 'work-in-progress') titleText = 'WIP';
      if (type === 'tldr') titleText = 'TL;DR';
      
      // Transform the blockquote node into a container div
      node.data = node.data || {};
      node.data.hName = 'div';
      node.data.hProperties = { 
        className: ['markdown-alert', `markdown-alert-${type}`, 'my-12'] 
      };

      // Construct the internal structure
      const anchorNode = {
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: { className: ['margin-anchor'] }
        },
        children: [
          {
            type: 'text',
            value: icon,
            data: {
              hName: 'span',
              hProperties: { className: ['material-symbols-outlined', 'callout-icon'] }
            }
          },
          {
            type: 'text',
            value: titleText,
            data: {
              hName: 'span',
              hProperties: { className: ['callout-label'] }
            }
          }
        ]
      };

      const contentNode = {
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: { className: ['markdown-alert-content'] }
        },
        children: node.children
      };

      // Set children to our new grid layout
      node.children = [anchorNode, contentNode];
    });
  };
}
