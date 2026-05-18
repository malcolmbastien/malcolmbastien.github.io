import { visit } from "unist-util-visit";

const colorMap = {
  note: "note",
  quote: "quote",
  draft: "wip",
  wip: "wip",
  "work-in-progress": "wip",
  tip: "tip",
  idea: "idea",
  warning: "warning",
  caution: "warning",
  attention: "warning",
  important: "important",
  abstract: "abstract",
  summary: "abstract",
  tldr: "abstract",
  success: "success",
  check: "success",
  done: "success",
  info: "info",
  todo: "todo",
  error: "danger",
  bug: "bug",
  danger: "danger",
  failure: "danger",
  fail: "danger",
  missing: "danger",
  example: "example",
  question: "question",
  help: "question",
  faq: "question",
  hint: "tip",
};

const colorStyles = {
  note: { bg: "#f8fafc", border: "#0F172A", text: "#0F172A", icon: "sticky_note_2" },
  abstract: { bg: "#f2f4f6", border: "#76777d", text: "#45464d", icon: "description", italicBody: true },
  info: { bg: "#eff6ff", border: "#2563eb", text: "#1d4ed8", icon: "info" },
  example: { bg: "#ffffff", border: "#ac3400", text: "#ac3400", icon: "lightbulb", fullBorder: true },
  tip: { bg: "#ecfdf5", border: "#047857", text: "#065f46", icon: "tips_and_updates" },
  idea: { bg: "#fffbeb", border: "#d97706", text: "#d97706", icon: "lightbulb" },
  important: { bg: "#fef2f2", border: "#C2410C", text: "#C2410C", icon: "priority_high", boldHeader: true },
  todo: { bg: "#f1f5f9", border: "#0F172A", text: "#0F172A", icon: "check_box_outline_blank" },
  success: { bg: "#f0fdf4", border: "#16a34a", text: "#15803d", icon: "check_circle" },
  question: { bg: "#f2f4f6", border: "#76777d", text: "#64748b", icon: "help" },
  warning: { bg: "#fff7ed", border: "#C2410C", text: "#C2410C", icon: "warning" },
  danger: { bg: "#fef2f2", border: "#dc2626", text: "#dc2626", icon: "error" },
  bug: { bg: "#f2f4f6", border: "#76777d", text: "#475569", icon: "pest_control" },
  quote: { bg: "#f2f4f6", border: "#76777d", text: "#374151", icon: "format_quote", italicBody: true },
  wip: { bg: "#f2f4f6", border: "#76777d", text: "#d97706", icon: "construction" },
};

export function remarkCallouts() {
  return (tree) => {
    visit(tree, "blockquote", (node) => {
      try {
        const firstChild = node.children[0];
        if (!firstChild || firstChild.type !== "paragraph") return;

        const firstText = firstChild.children[0];
        if (!firstText || firstText.type !== "text") return;

        const textValue = firstText.value || "";
        const match = textValue.match(/^\[!([\w\s-]+)\]/i);
        if (!match) return;

        const rawType = match[1];
        const type = rawType.toLowerCase().trim().replace(/\s+/g, "-");
        const colorTheme = colorMap[type] || "info";
        const colors = colorStyles[colorTheme] || colorStyles.info;

        firstText.value = textValue.replace(/^\[!([\w\s-]+)\]/i, "").trim();

        const iconName = colors.icon || "info";

        let titleText = rawType.trim();
        titleText =
          titleText.charAt(0).toUpperCase() + titleText.slice(1).toLowerCase();
        if (type === "wip" || type === "work-in-progress") titleText = "WIP";
        if (type === "tldr") titleText = "TL;DR";

        const contentParts = [];
        for (const child of node.children) {
          if (child.type === "paragraph") {
            const text = child.children.map((c) => c.value || "").join("");
            if (text) {
              contentParts.push(`<p style="margin: 0;">${text}</p>`);
            }
          }
        }

        const extraBorder = colors.fullBorder ? 'border: 1px solid #e2e8f0; border-left: 4px solid ' + colors.border + ';' : '';
        const hoverStyle = type === 'note' ? ' transition: box-shadow 0.2s;' : '';
        const italicBody = colors.italicBody ? ' font-style: italic;' : '';
        const headerWeight = colors.boldHeader ? ' font-weight: 700;' : '';
        const calloutHtml = `<div class="callout-block" data-callout-type="${type}" style="background-color: ${colors.bg}; border-left: 4px solid ${colors.border}; margin: 1.5rem 0; padding: 1.5rem;${extraBorder}${hoverStyle}">
  <div class="callout-header" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; color: ${colors.text};${headerWeight}">
    <span class="material-symbols-outlined" style="font-size: 20px;">${iconName}</span>
    <span class="callout-title">${titleText}</span>
  </div>
  <div class="callout-body" style="${italicBody}">
    ${contentParts.join("\n")}
  </div>
</div>`;

        node.type = "html";
        node.value = calloutHtml;
        node.children = undefined;
      } catch (error) {
        console.error(`[remark-callouts] Error:`, error.message);
      }
    });
  };
}
