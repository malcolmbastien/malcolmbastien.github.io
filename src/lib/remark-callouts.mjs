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
      
      // Transform <blockquote> into a <div> for the new horizontal design
      node.data = node.data || {};
      node.data.hName = 'div';
      node.data.hProperties = { 
        className: ['markdown-alert', `markdown-alert-${type}`] 
      };

      // Clean up the original text by removing the [!TYPE] marker
      firstText.value = firstText.value.replace(/^\[!([\w\s-]+)\]/i, '').trim();

      let titleText = rawType.trim().toUpperCase();
      if (type === 'wip' || type === 'work-in-progress') titleText = 'WIP';
      if (type === 'tldr') titleText = 'TL;DR';
      
      // Construct the header (Icon + Label)
      const headerNode = {
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: { className: ['markdown-alert-header'] }
        },
        children: [
          {
            type: 'text',
            value: icon,
            data: {
              hName: 'span',
              hProperties: { className: ['material-symbols-outlined', 'markdown-alert-icon'] }
            }
          },
          {
            type: 'text',
            value: titleText,
            data: {
              hName: 'span',
              hProperties: { className: ['markdown-alert-title'] }
            }
          }
        ]
      };

      // Construct the content area
      const contentNode = {
        type: 'paragraph',
        data: {
          hName: 'div',
          hProperties: { className: ['markdown-alert-content'] }
        },
        children: [...node.children]
      };

      // Set node children to the new vertical stack
      node.children = [headerNode, contentNode];
    });
  };
}
