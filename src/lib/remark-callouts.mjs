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

const colorStyles = {
  slate: { bg: '#f8fafc', border: '#64748b', text: '#475569' },
  amber: { bg: '#fffbeb', border: '#f59e0b', text: '#d97706' },
  green: { bg: '#f0fdf4', border: '#22c55e', text: '#16a34a' },
  blue: { bg: '#eff6ff', border: '#3b82f6', text: '#2563eb' },
  red: { bg: '#fef2f2', border: '#ef4444', text: '#dc2626' },
  purple: { bg: '#faf5ff', border: '#a855f7', text: '#9333ea' }
};

export function remarkCallouts() {
  return (tree, file) => {
    console.log(`[remark-callouts] ==================== STARTING ${file.basename || 'unknown'} ====================`);
    console.log(`[remark-callouts] Tree type: ${tree.type}`);
    console.log(`[remark-callouts] Tree children count: ${tree.children?.length || 0}`);
    
    let calloutCount = 0;
    let blockquoteCount = 0;
    
    // Log all blockquotes found
    visit(tree, 'blockquote', (node, index) => {
      blockquoteCount++;
      console.log(`[remark-callouts] Found blockquote #${blockquoteCount} at index ${index}`);
      console.log(`[remark-callouts] Blockquote children: ${node.children?.length || 0}`);
      
      if (node.children && node.children[0]) {
        console.log(`[remark-callouts] First child type: ${node.children[0].type}`);
        if (node.children[0].children && node.children[0].children[0]) {
          console.log(`[remark-callouts] First text type: ${node.children[0].children[0].type}`);
          const text = node.children[0].children[0].value || '';
          console.log(`[remark-callouts] Text preview: "${text.substring(0, 30)}..."`);
        }
      }
    });
    
    console.log(`[remark-callouts] Total blockquotes found: ${blockquoteCount}`);
    
    // Now process them
    visit(tree, 'blockquote', (node) => {
      try {
        const firstChild = node.children[0];
        if (!firstChild || firstChild.type !== 'paragraph') return;

        const firstText = firstChild.children[0];
        if (!firstText || firstText.type !== 'text') return;

        const textValue = firstText.value || '';
        const match = textValue.match(/^\[!([\w\s-]+)\]/i);
        if (!match) return;

        calloutCount++;
        const rawType = match[1];
        const type = rawType.toLowerCase().trim().replace(/\s+/g, '-');
        const iconName = iconMap[type] || 'info';
        const colorTheme = colorMap[type] || 'blue';
        const colors = colorStyles[colorTheme];
        
        // Remove the [!TYPE] marker
        firstText.value = textValue.replace(/^\[!([\w\s-]+)\]/i, '').trim();

        let titleText = rawType.trim();
        titleText = titleText.charAt(0).toUpperCase() + titleText.slice(1).toLowerCase();
        if (type === 'wip' || type === 'work-in-progress') titleText = 'WIP';
        if (type === 'tldr') titleText = 'TL;DR';
        
        // Collect content
        const contentParts = [];
        for (const child of node.children) {
          if (child.type === 'paragraph') {
            const text = child.children.map(c => c.value || '').join('');
            if (text) {
              contentParts.push(`<p style="margin: 0; color: #334155; line-height: 1.6;">${text}</p>`);
            }
          }
        }
        
        const calloutHtml = `<div class="callout-block" data-callout-type="${type}" style="background-color: ${colors.bg}; border-left: 3px solid ${colors.border}; margin: 1.5rem 0; padding: 1rem 1.25rem; border-radius: 0 0.5rem 0.5rem 0;">
  <div class="callout-header" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
    <span class="material-symbols-outlined" style="font-size: 20px; color: ${colors.text}; font-variation-settings: 'FILL' 1;">${iconName}</span>
    <span class="callout-title" style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: ${colors.text};">${titleText}</span>
  </div>
  <div class="callout-body">
    ${contentParts.join('\n')}
  </div>
</div>`;

        node.type = 'html';
        node.value = calloutHtml;
        node.children = undefined;
        
        console.log(`[remark-callouts] ✓ Transformed: ${type}`);
        
      } catch (error) {
        console.error(`[remark-callouts] Error:`, error.message);
      }
    });
    
    console.log(`[remark-callouts] ==================== FINISHED: ${calloutCount} callouts ====================`);
  };
}
