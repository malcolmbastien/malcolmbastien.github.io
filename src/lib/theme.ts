/**
 * Centralized Theme Configuration
 *
 * Edit colors in this file to change them throughout the entire application.
 * All stage-related colors (badges, progress bars, hover effects, headers)
 * are defined here for consistency and easy maintenance.
 *
 * Note: Glow effects are now applied inline based on card state (slate/emerald/amber)
 * rather than post stage, for better visual consistency.
 *
 * Usage:
 * - import { getStageColors, getStageGlows, getProgressColors } from '../lib/theme'
 * - Or access theme object directly: import { theme } from '../lib/theme'
 */
export const theme = {
  // Header coin colors
  header: {
    seed: "bg-amber-100 dark:bg-amber-900/40 border border-amber-200 dark:border-amber-800",
    sprout:
      "bg-teal-100 dark:bg-teal-900/40 border border-teal-200 dark:border-teal-800",
    evergreen: "bg-green-100 dark:bg-green-900/40 border border-green-200 dark:border-green-800",
  },

  stage: {
    seed: {
      badge:
        "bg-amber-50 text-andon-amber border border-amber-100",
      glow: "hover:shadow-amber-100/50",
      progress: "bg-andon-amber",
    },
    sprout: {
      badge:
        "bg-teal-50 text-teal-600 border border-teal-100",
      glow: "hover:shadow-teal-100/50",
      progress: "bg-teal-500",
    },
    evergreen: {
      badge:
        "bg-green-50 text-green-600 border border-green-100",
      glow: "hover:shadow-green-100/50",
      progress: "bg-green-500",
    },
  },
};

// Helper functions to get theme values
export const getStageColors = () => ({
  seed: theme.stage.seed.badge,
  sprout: theme.stage.sprout.badge,
  evergreen: theme.stage.evergreen.badge,
});

export const getStageGlows = () => ({
  seed: theme.stage.seed.glow,
  sprout: theme.stage.sprout.glow,
  evergreen: theme.stage.evergreen.glow,
});

export const getProgressColors = () => ({
  seed: theme.stage.seed.progress,
  sprout: theme.stage.sprout.progress,
  evergreen: theme.stage.evergreen.progress,
});
