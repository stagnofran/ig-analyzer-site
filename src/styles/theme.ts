export const theme = {
  colors: {
    bg: '#0a0a0a',
    bgElevated: '#141414',
    bgCard: '#1a1a1a',
    border: '#262626',
    borderStrong: '#333333',
    text: '#fafafa',
    textMuted: '#a3a3a3',
    textDim: '#737373',
    // Instagram gradient
    gradientStart: '#feda75',
    gradientMid: '#fa7e1e',
    gradientPink: '#d62976',
    gradientPurple: '#962fbf',
    gradientEnd: '#4f5bd5',
    accentPink: '#ff2d74',
    accentOrange: '#ff8a3d',
    success: '#22c55e',
    danger: '#ef4444',
    info: '#3b82f6',
  },
  gradients: {
    brand: 'linear-gradient(135deg, #fa7e1e 0%, #d62976 50%, #962fbf 100%)',
    brandSoft: 'linear-gradient(135deg, rgba(250,126,30,0.15), rgba(214,41,118,0.15))',
    text: 'linear-gradient(135deg, #ff8a3d, #ff2d74, #c026d3)',
  },
  radii: {
    sm: '6px',
    md: '12px',
    lg: '20px',
    xl: '28px',
    pill: '9999px',
  },
  spacing: (n: number) => `${n * 4}px`,
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  shadows: {
    sm: '0 2px 8px rgba(0,0,0,0.3)',
    md: '0 8px 24px rgba(0,0,0,0.4)',
    glow: '0 0 40px rgba(214,41,118,0.25)',
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
} as const;

export type AppTheme = typeof theme;
