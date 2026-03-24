import { visit } from "unist-util-visit";

const iconMap = {
  note: "sticky_note_2",
  info: "info",
  important: "priority_high",
  todo: "check_circle",
  abstract: "description",
  summary: "description",
  tldr: "description",
  success: "celebration",
  tip: "lightbulb",
  hint: "lightbulb",
  idea: "lightbulb",
  done: "check_circle",
  check: "check_circle",
  warning: "warning",
  caution: "warning",
  attention: "warning",
  failure: "cancel",
  fail: "cancel",
  missing: "cancel",
  danger: "local_fire_department",
  error: "error",
  bug: "pest_control",
  example: "auto_stories",
  quote: "format_quote",
  cite: "format_quote",
  draft: "stylus_note",
  wip: "construction",
  "work-in-progress": "construction",
  question: "help",
  help: "help",
  faq: "help",
};

const colorMap = {
  note: "slate",
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
  example: "purple",
  question: "question",
  help: "question",
  faq: "question",
  summary: "success",
  tldr: "success",
  hint: "tip",
};

const colorStyles = {
  slate: { bg: "#eeeff3", border: "#993fe5", text: "#993fe5" },
  tip: { bg: "#ecfdf5", border: "#10b981", text: "#10b981" },
  idea: { bg: "#fefce8", border: "#eab308", text: "#eab308" },
  warning: { bg: "#fffafb", border: "#f59e0b", text: "#f59e0b" },
  important: { bg: "#fff1f2", border: "#e11d48", text: "#e11d48" },
  abstract: { bg: "#ecfeff", border: "#0891b4", text: "#0891b4" },
  success: { bg: "#f0fdf4", border: "#22c55e", text: "#22c55e" },
  info: { bg: "#eff6ff", border: "#3b82f6", text: "#3b82f6" },
  todo: { bg: "#dde1ff", border: "#335cff", text: "#335cff" },
  danger: { bg: "#ffdada", border: "#ba1a1a", text: "#ba1a1a" },
  bug: { bg: "#f1f5f9", border: "#475569", text: "#475569" },
  quote: { bg: "#f9f9fc", border: "#c4c5d9", text: "#374151" },
  wip: { bg: "#f5f3ff", border: "#8b5cf6", text: "#7c3aed" },
  purple: { bg: "#eef2ff", border: "#6366f1", text: "#6366f1" },
};

export function remarkCallouts() {
  return (tree, file) => {
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
        const iconName = iconMap[type] || "info";
        const colorTheme = colorMap[type] || "info";
        const colors = colorStyles[colorTheme] || colorStyles.info;

        firstText.value = textValue.replace(/^\[!([\w\s-]+)\]/i, "").trim();

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

        const calloutHtml = `<div class="callout-block" data-callout-type="${type}" style="background-color: ${colors.bg}; border-left: 4px solid ${colors.border}; margin: 1rem 0; padding: 1rem; border-radius: 0 0.5rem 0.5rem 0; width: 100%; font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">
  <div class="callout-header" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
    <span class="material-symbols-outlined" style="font-size: 18px; color: ${colors.text}; font-variation-settings: 'FILL' 0;">${iconName}</span>
    <span class="callout-title" style="font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: ${colors.text};">${titleText}</span>
  </div>
  <div class="callout-body" style="font-family: 'Plus Jakarta Sans', system-ui, sans-serif;">
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
