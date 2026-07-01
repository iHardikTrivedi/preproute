/**
 * Base spacing unit (8px)
 * Used by Material UI's theme.spacing()
 */
const spacing = 8;

/**
 * Semantic spacing tokens
 */
export const SPACE = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
  "4xl": 64,
  "5xl": 80,
  "6xl": 96,
} as const;

/**
 * Common layout dimensions
 */
export const LAYOUT = {
  headerHeight: 72,
  sidebarWidth: 260,
  contentMaxWidth: 1440,
  containerPadding: SPACE.lg,
} as const;

/**
 * Common border radius values
 */
export const RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const;

export default spacing;
