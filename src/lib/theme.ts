/**
 * Centralized Stage Configuration
 *
 * Edit this file to change stage-related colors, icons, and labels
 * throughout the entire application.
 */

export const stages = {
  seed: {
    label: "Seed",
    icon: "potted_plant",
    colors: {
      badge: "bg-orange-50 dark:bg-orange-900/30 text-orange-600",
      dot: "bg-orange-400",
      text: "text-orange-600",
      border: "border-orange-600",
      underline: "#f97316", // orange-500
      accent: "text-orange-600 dark:text-orange-400",
      bgAccent: "bg-orange-500/5",
      dotShadow: "bg-orange-500 shadow-orange-500/20",
    },
  },
  sprout: {
    label: "Sprout",
    icon: "eco",
    colors: {
      badge: "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600",
      dot: "bg-yellow-400",
      text: "text-yellow-600",
      border: "border-yellow-600",
      underline: "#ca8a04", // yellow-600
      accent: "text-yellow-600 dark:text-yellow-400",
      bgAccent: "bg-yellow-500/5",
      dotShadow: "bg-yellow-500 shadow-yellow-500/20",
    },
  },
  evergreen: {
    label: "Evergreen",
    icon: "energy_savings_leaf",
    colors: {
      badge: "bg-green-50 dark:bg-green-900/30 text-green-600",
      dot: "bg-green-500",
      text: "text-green-600",
      border: "border-green-600",
      underline: "#16a34a", // green-600
      accent: "text-green-600 dark:text-green-400",
      bgAccent: "bg-green-600/5",
      dotShadow: "bg-green-500 shadow-green-500/20",
    },
  },
};

export type StageKey = keyof typeof stages;

/**
 * Helper to get stage data safely
 */
export const getStageData = (stage: string) => {
  const key = stage.toLowerCase() as StageKey;
  return (
    stages[key] || {
      label: stage,
      icon: "question_mark",
      colors: {
        badge: "bg-slate-100 dark:bg-slate-800 text-slate-500",
        dot: "bg-slate-400",
        text: "text-slate-500",
        underline: "#94a3b8",
        accent: "text-slate-500",
        bgAccent: "bg-slate-500/10",
        dotShadow: "bg-slate-500 shadow-slate-500/20",
      },
    }
  );
};

// Legacy support for theme object if needed, though stages is preferred
export const theme = {
  stage: stages,
};
