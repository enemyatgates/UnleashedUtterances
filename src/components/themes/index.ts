export type ThemeName = "light" | "dark" | "sepia" | "minimal" | "bold";

export const themes: Record<ThemeName, Record<string, string>> = {
  light: {
    "--bg": "#ffffff",
    "--fg": "#1a1a1a",
    "--accent": "#0070f3",
    "--muted": "#666666",
    "--border": "#e5e5e5",
    "--surface": "#f9f9f9",
    "--font-body": "'Georgia', serif",
    "--font-heading": "'Inter', sans-serif",
  },
  dark: {
    "--bg": "#0d0d0d",
    "--fg": "#e8e8e8",
    "--accent": "#7eb8f7",
    "--muted": "#999999",
    "--border": "#2a2a2a",
    "--surface": "#1a1a1a",
    "--font-body": "'Georgia', serif",
    "--font-heading": "'Inter', sans-serif",
  },
  sepia: {
    "--bg": "#f4efe6",
    "--fg": "#3b2f2f",
    "--accent": "#8b4513",
    "--muted": "#7a6a5a",
    "--border": "#d4c5a9",
    "--surface": "#ede8df",
    "--font-body": "'Palatino Linotype', serif",
    "--font-heading": "'Palatino Linotype', serif",
  },
  minimal: {
    "--bg": "#fafafa",
    "--fg": "#111111",
    "--accent": "#111111",
    "--muted": "#888888",
    "--border": "#eeeeee",
    "--surface": "#f4f4f4",
    "--font-body": "'Helvetica Neue', sans-serif",
    "--font-heading": "'Helvetica Neue', sans-serif",
  },
  bold: {
    "--bg": "#1a1a2e",
    "--fg": "#eaeaea",
    "--accent": "#e94560",
    "--muted": "#a0a0b0",
    "--border": "#2a2a4a",
    "--surface": "#16213e",
    "--font-body": "'Inter', sans-serif",
    "--font-heading": "'Inter', sans-serif",
  },
};

export function getThemeVars(theme: ThemeName): Record<string, string> {
  return themes[theme] ?? themes.light;
}

