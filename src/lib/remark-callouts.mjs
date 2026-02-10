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

const colorMap = {
  note: 'slate',
  quote: 'slate',
  draft: 'slate',
  wip: 'slate',
  'work-in-progress': 'slate',
  
  tip: 'amber',
  idea: 'amber',
  warning: 'amber',
  caution: 'amber',
  attention: 'amber',
  important: 'amber',
  
  abstract: 'green',
  success: 'green',
  check: 'green',
  done: 'green',
  
  info: 'blue',
  todo: 'blue',
  
  error: 'red',
  bug: 'red',
  danger: 'red',
  failure: 'red',
  fail: 'red',
  missing: 'red',
  
  example: 'purple',
  question: 'purple',
  help: 'purple',
  faq: 'purple',
  
  summary: 'green',
  tldr: 'green',
  hint: 'amber'
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
      const iconName = iconMap[type] || 'info';
      const colorTheme = colorMap[type] || 'blue';
      
      // Remove the [!TYPE] marker
      firstText.value = firstText.value.replace(/^\[!([\w\s-]+)\]/i, '').trim();

      let titleText = rawType.trim();
      titleText = titleText.charAt(0).toUpperCase() + titleText.slice(1).toLowerCase();
      if (type === 'wip' || type === 'work-in-progress') titleText = 'WIP';
      if (type === 'tldr') titleText = 'TL;DR';
      
      // Create inline HTML for the callout with Material Symbols
      const contentHtml = node.children
        .map(child => {
          if (child.type === 'paragraph') {
            return `<p>${child.children.map(c => c.value || '').join('')}</p>`;
          }
          return '';
        })
        .join('');

      // Replace the entire blockquote with a div containing the callout
      node.type = 'html';
      node.value = `
        <div class="callout-block callout-${colorTheme} my-6 mx-4 sm:mx-6 p-4 sm:p-5 border-l-2">
          <div class="callout-header flex items-center gap-2 mb-2">
            <span class="material-symbols-outlined callout-icon">${iconName}</span>
            <span class="callout-title">${titleText}</span>
          </div>
          <div class="callout-content">
            ${contentHtml}
          </div>
        </div>
      `;
    });
  };
}
