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

// Color definitions for each type
const colorSchemes = {
  slate: {
    bg: 'rgba(100, 116, 139, 0.05)',
    border: '#64748b',
    header: '#475569'
  },
  amber: {
    bg: 'rgba(245, 158, 11, 0.05)',
    border: '#f59e0b',
    header: '#d97706'
  },
  green: {
    bg: 'rgba(34, 197, 94, 0.05)',
    border: '#22c55e',
    header: '#16a34a'
  },
  blue: {
    bg: 'rgba(59, 130, 246, 0.05)',
    border: '#3b82f6',
    header: '#2563eb'
  },
  red: {
    bg: 'rgba(239, 68, 68, 0.05)',
    border: '#ef4444',
    header: '#dc2626'
  },
  purple: {
    bg: 'rgba(168, 85, 247, 0.05)',
    border: '#a855f7',
    header: '#9333ea'
  }
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
    let calloutCount = 0;
    
    visit(tree, 'blockquote', (node) => {
      const firstChild = node.children[0];
      if (!firstChild || firstChild.type !== 'paragraph') return;

      const firstText = firstChild.children[0];
      if (!firstText || firstText.type !== 'text') return;

      const match = firstText.value.match(/^\[!([\w\s-]+)\]/i);
      if (!match) return;

      calloutCount++;
      const rawType = match[1];
      const type = rawType.toLowerCase().trim().replace(/\s+/g, '-');
      const iconName = iconMap[type] || 'info';
      const colorTheme = colorMap[type] || 'blue';
      const colors = colorSchemes[colorTheme];
      
      // Remove the [!TYPE] marker
      firstText.value = firstText.value.replace(/^\[!([\w\s-]+)\]/i, '').trim();

      let titleText = rawType.trim();
      titleText = titleText.charAt(0).toUpperCase() + titleText.slice(1).toLowerCase();
      if (type === 'wip' || type === 'work-in-progress') titleText = 'WIP';
      if (type === 'tldr') titleText = 'TL;DR';
      
      // Create inline HTML for the callout with inline styles
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
      node.value = `<div class="callout-block" style="background-color: ${colors.bg}; border-left: 2px solid ${colors.border}; margin: 1.5rem 1rem; padding: 1rem 1.25rem; font-family: 'Lora', Georgia, serif; font-style: italic; font-size: 1.1rem; line-height: 1.6;"><div class="callout-header" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; font-family: 'Inter', system-ui, sans-serif; font-style: normal;"><span class="material-symbols-outlined callout-icon" style="font-size: 20px; color: ${colors.header}; font-variation-settings: 'FILL' 1, 'wght' 400;">${iconName}</span><span class="callout-title" style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; color: ${colors.header};">${titleText}</span></div><div class="callout-content">${contentHtml}</div></div>`;
    });
    
    console.log(`[remark-callouts] Transformed ${calloutCount} callouts`);
  };
}
