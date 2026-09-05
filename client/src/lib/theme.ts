import { createTheme } from "@mui/material/styles";

export type ThemeMode = "light" | "dark";

const palettes = {
  light: {
    mode: "light" as const,
    primary: {
      main: "hsl(152, 55%, 33%)",
      light: "hsl(152, 55%, 42%)",
      dark: "hsl(152, 55%, 25%)",
      contrastText: "#fafafa",
    },
    secondary: {
      main: "hsl(200, 55%, 42%)",
      light: "hsl(200, 55%, 52%)",
      dark: "hsl(200, 55%, 32%)",
      contrastText: "#fafafa",
    },
    warning: {
      main: "hsl(38, 70%, 50%)",
      contrastText: "hsl(160, 30%, 8%)",
    },
    error: {
      main: "hsl(0, 84%, 42%)",
      contrastText: "#fafafa",
    },
    background: {
      default: "hsl(150, 15%, 97%)",
      paper: "hsl(150, 12%, 95%)",
    },
    text: {
      primary: "hsl(160, 30%, 8%)",
      secondary: "hsl(160, 12%, 42%)",
    },
    divider: "hsl(150, 10%, 87%)",
  },
  dark: {
    mode: "dark" as const,
    primary: {
      main: "hsl(152, 55%, 42%)",
      light: "hsl(152, 55%, 52%)",
      dark: "hsl(152, 55%, 33%)",
      contrastText: "hsl(160, 30%, 6%)",
    },
    secondary: {
      main: "hsl(200, 55%, 52%)",
      light: "hsl(200, 55%, 62%)",
      dark: "hsl(200, 55%, 42%)",
      contrastText: "hsl(160, 30%, 6%)",
    },
    warning: {
      main: "hsl(38, 65%, 48%)",
      contrastText: "hsl(160, 30%, 8%)",
    },
    error: {
      main: "hsl(0, 70%, 52%)",
      contrastText: "#fafafa",
    },
    background: {
      default: "hsl(160, 25%, 5%)",
      paper: "hsl(160, 20%, 8%)",
    },
    text: {
      primary: "hsl(150, 12%, 93%)",
      secondary: "hsl(150, 10%, 60%)",
    },
    divider: "hsl(160, 15%, 16%)",
  },
};

export function buildTheme(mode: ThemeMode) {
  return createTheme({
    palette: palettes[mode],
    typography: {
      fontFamily: "'Space Grotesk', sans-serif",
      h1: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
        letterSpacing: "-0.01em",
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
      body1: {
        lineHeight: 1.7,
      },
      body2: {
        lineHeight: 1.6,
      },
      button: {
        textTransform: "none" as const,
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none" as const,
            fontWeight: 500,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            backgroundImage: "none",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 500,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 8,
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: "smooth",
          },
        },
      },
    },
  });
}

const theme = buildTheme("light");

export default theme;
