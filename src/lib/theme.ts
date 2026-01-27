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
      badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
      dot: "bg-amber-400",
      text: "text-amber-700 dark:text-amber-400",
      underline: "#fbbf24", // amber-400
      accent: "text-amber-500 dark:text-amber-400",
      bgAccent: "bg-amber-500/10",
      dotShadow: "bg-amber-500 shadow-amber-500/20"
    }
  },
  sprout: {
    label: "Sprout",
    icon: "eco",
    colors: {
      badge: "bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400",
      dot: "bg-lime-500",
      text: "text-lime-700 dark:text-lime-400",
      underline: "#a3e635", // lime-400
      accent: "text-lime-500 dark:text-lime-400",
      bgAccent: "bg-lime-500/10",
      dotShadow: "bg-lime-500 shadow-lime-500/20"
    }
  },
  evergreen: {
    label: "Evergreen",
    icon: "energy_savings_leaf",
    colors: {
      badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
      dot: "bg-green-600",
      text: "text-green-700 dark:text-green-400",
      underline: "#16a34a", // green-600
      accent: "text-green-600 dark:text-green-400",
      bgAccent: "bg-green-600/10",
      dotShadow: "bg-green-500 shadow-green-500/20"
    }
  }
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
