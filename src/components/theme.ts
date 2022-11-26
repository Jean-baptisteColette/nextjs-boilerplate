// Create a theme instance.
import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { CSSProperties } from "@mui/styled-engine";
const {
  palette,
  components,
  mixins,
  shadows,
  transitions,
  typography,
  zIndex,
  shape,
  breakpoints,
  direction,
  spacing,
} = createTheme();

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: CSSProperties;
    body4: CSSProperties;
    subtitle3: CSSProperties;
    inputText: CSSProperties;
    inputLabel: CSSProperties;
    buttonSmall: CSSProperties;
    buttonMedium: CSSProperties;
    buttonLarge: CSSProperties;
    tableHeader: CSSProperties;
  }

  interface Palette {
    accentCoral: PaletteColor;
    accentDesert: PaletteColor;
  }
  interface PaletteColor {
    hoverContained?: string;
    focused?: string;
    hoverOutlined?: string;
    disabled?: string;
  }
  interface SimplePaletteColorOptions {
    hoverContained?: string;
    focused?: string;
    hoverOutlined?: string;
    disabled?: string;
  }
  interface PaletteOptions {
    accentCoral: PaletteColor;
    accentDesert: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accentCoral: true;
    accentDesert: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    accentCoral: true;
    accentDesert: true;
  }
}

declare module "@mui/material/Alert" {
  interface AlertPropsColorOverrides {
    primary: true;
    secondary: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    accentCoral: true;
    accentDesert: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    inputText: true;
    inputLabel: true;
    subtitle3: true;
    buttonSmall: true;
    buttonMedium: true;
    buttonLarge: true;
    tableHeader: true;
  }
}

const theme: Theme = {
  components: {
    ...components,
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
          "div[role='presentation'][aria-labelledby='fullscreen-modal-title']":
            {
              position: "-webkit-sticky",
            },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "&.MuiButton-root": {
            "&.MuiButton-contained": {
              color: "#FFFFFF",
              ".MuiSvgIcon-root": {
                color: "#FFFFFF",
              },
            },
            "&.MuiButton-outlined": {
              ".MuiSvgIcon-root": {
                color: "#5087A5",
              },
              "&:hover": {
                backgroundColor: "#ebf2f7",
              },
            },
            "&.MuiButton-text": {
              ".MuiSvgIcon-root": {
                marginLeft: "4px",
              },
            },
            "&.Mui-disabled": {
              color: "rgba(0, 0, 0, 0.26)",
              backgroundColor: "rgba(0, 0, 0, 0.12)",
              ".MuiSvgIcon-root": {
                color: "rgba(0, 0, 0, 0.26)",
              },
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.12)",
              },
            },
            "&.MuiButton-containedError": {
              color: "#FFFFFF",
              ".MuiSvgIcon-root": {
                color: "#FFFFFF",
              },
              "&:hover": {
                backgroundColor: "#a40101",
              },
            },
            "&.MuiButton-outlinedError": {
              backgroundColor: "#FFFFFF",
              ".MuiSvgIcon-root": {
                color: "#D50000",
              },
              "&:hover": {
                backgroundColor: "#FDECEA",
              },
            },
            "&.MuiButton-textError": {
              color: "#D50000",
              backgroundColor: "transparent",
              ".MuiSvgIcon-root": {
                color: "#D50000",
              },
              "&:hover": {
                backgroundColor: "#FDECEA",
              },
            },
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiInputBase-formControl": {
            fieldset: {
              borderWidth: "1px",
            },
          },
          ".MuiChip-root": {
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(0, 0, 0, 0.26)",
            color: "#5087A5",
            ".MuiChip-deleteIcon": {
              opacity: "0.5",
              color: "rgba(0, 0, 0, 0.26)",
              "&:hover": {
                opacity: "1",
                color: "rgba(0, 0, 0, 0.26)",
              },
            },
            span: {
              color: "rgba(0, 0, 0, 0.87)",
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.custom-accordion": {
            "&:before": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              top: "auto",
              bottom: "-8px",
            },
            "&.Mui-expanded": {
              marginBottom: 0,
            },
            backgroundColor: "transparent",
            ".MuiAccordionDetails-root": {
              backgroundColor: "transparent",
              padding: 0,
            },
            tfoot: {
              ".MuiTableCell-footer": { border: "none" },
              ".MuiToolbar-root": {
                padding: "8px 0 0 0",
                ".MuiTablePagination-spacer": {
                  flex: 0,
                },
              },
            },
            ".MuiCollapse-root": { padding: 0 },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: "#005B9C",
        },
        tooltip: {
          backgroundColor: "#005B9C",
          paddingTop: "0",
          paddingBottom: "0",
          "&.MuiTooltip-tooltipPlacementRight.MuiTooltip-tooltip": {
            ".MuiTooltip-arrow": {
              width: "0.745em",
              top: "-1px!important",
            },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "tr:not(.MuiTableRow-head):not(.MuiTableRow-footer):not(.no-hover)": {
            cursor: "pointer",
            transition: "background 0.25s ease-in",
            "&:hover": {
              background: "rgba(80, 135, 165, 0.07)",
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          [".MuiTabs-scrollButtons.Mui-disabled"]: {
            opacity: 0.3,
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          ".MuiToggleButton-root": {
            "&.Mui-selected": {
              backgroundColor: "rgba(11, 92, 152, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(11, 92, 152, 0.16)",
              },
            },
            "&:hover": {
              backgroundColor: "rgba(11, 92, 152, 0.04)",
            },
          },
        },
      },
    },
  },
  typography: {
    ...typography,
    body1: {
      fontFamily: "Roboto",
      fontSize: "1.125rem",
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: 1.88,
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: 1.5,
    },
    body3: {
      fontFamily: "Roboto",
      fontSize: "0.875rem", //14
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: 1.57,
    },
    body4: {
      fontFamily: "Roboto",
      fontSize: "0.75rem", //12
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: 1.5,
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: "1.125rem",
      fontWeight: 300,
      letterSpacing: "0",
      lineHeight: 1.66,
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: 300,
      letterSpacing: "0",
      lineHeight: 1.5,
    },
    subtitle3: {
      fontFamily: "Roboto",
      fontSize: "0.875rem",
      fontWeight: 300,
      letterSpacing: "0",
      lineHeight: 1.57,
    },
    tableHeader: {
      fontFamily: "Roboto",
      fontSize: "0.875rem",
      fontWeight: 600,
      letterSpacing: "0",
      lineHeight: 1.57,
    },
    caption: {
      fontFamily: "Roboto",
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "0.01em",
      lineHeight: 1.57,
    },
    inputText: {
      fontFamily: "Roboto",
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0.00em",
      lineHeight: 1.57,
    },
    inputLabel: {
      fontFamily: "Roboto",
      fontSize: "0.75rem",
      fontWeight: 400,
      letterSpacing: "0.00em",
      lineHeight: 1.5,
    },
    overline: {
      fontFamily: "Roboto",
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0",
      lineHeight: 1.5,
    },
    h1: {
      fontFamily: "Roboto",
      fontSize: "6rem",
      fontWeight: 700,
      letterSpacing: "0",
      lineHeight: 1.08,
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: "3.75rem",
      fontWeight: 700,
      letterSpacing: "0",
      lineHeight: 1.13,
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: "3rem",
      fontWeight: 700,
      letterSpacing: "0",
      lineHeight: 1.16,
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: "2.125rem",
      fontWeight: 700,
      letterSpacing: "0",
      lineHeight: 1.29,
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: "1.5rem",
      fontWeight: 700,
      letterSpacing: "0",
      lineHeight: 1.33,
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: 700,
      letterSpacing: "0",
      lineHeight: 1.5,
    },
    button: {
      fontFamily: "Roboto",
      fontSize: "0.815rem",
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: 1.5,
    },
    buttonSmall: {
      fontFamily: "Roboto",
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: 1.57,
    },
    buttonMedium: {
      fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: 1.5,
    },
    buttonLarge: {
      fontFamily: "Roboto",
      fontSize: "1.125rem",
      fontWeight: 400,
      letterSpacing: "0",
      lineHeight: 1.66,
    },
  },
  palette: {
    ...palette,
    primary: {
      main: "#005B9C",
      dark: "#00386A",
      light: "#F3F8FC",
      contrastText: "#FFFFFF",
      hoverContained: "#003E73",
      focused: "#77A7CB",
      hoverOutlined: "#E9F2F9",
      disabled: "#DEDEE3",
    },
    secondary: {
      main: "#5A5A5F",
      dark: "#1C1C37",
      light: "#F4F4F7",
      contrastText: "#FFFFFF",
      hoverContained: "#363643",
      focused: "#A7A7A9",
      hoverOutlined: "#E7E7E7",
      disabled: "#DEDEE3",
    },
    action: {
      active: "#414161",
      hover: "#EFEFF3",
      hoverOpacity: 0.08,
      selectedOpacity: 0.08,
      disabledOpacity: 0.08,
      focusOpacity: 0.08,
      activatedOpacity: 0.08,
      selected: "#C9C9CE",
      disabled: "#626268",
      disabledBackground: "#DEDEE3",
      focus: "rgba(0, 0, 0, 0.12)",
    },
    error: {
      main: "#FF3B30",
      dark: "#5C0008",
      light: "#FFF6F2",
      contrastText: "#FFFFFF",
      hoverContained: "#B71D2E",
      focused: "#F57782",
      hoverOutlined: "#FFDACC",
      disabled: "#DEDEE3",
    },
    warning: {
      main: "#FF9500",
      dark: "#571900",
      light: "#FFFBEE",
      contrastText: "#FFFFFF",
      hoverContained: "#934300",
      focused: "#FFCC66",
      hoverOutlined: "#FFF2CC",
      disabled: "#DEDEE3",
    },
    info: {
      main: "#00A3BF",
      dark: "#054C5B",
      light: "#F4FEFF",
      contrastText: "#FFFFFF",
      hoverContained: "#008DA6",
      focused: "#79E2F2",
      hoverOutlined: "#E6FCFF",
      disabled: "#EFEFF3",
    },
    success: {
      main: "#36B37E",
      dark: "#004016",
      light: "#F5FFFA",
      contrastText: "#FFFFFF",
      hoverContained: "#006644",
      focused: "#79F2C0",
      hoverOutlined: "#E3FCEF",
      disabled: "#EFEFF3",
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
    },
    text: {
      primary: "#070725",
      secondary: "#69696C",
      disabled: "#C8C8CF",
    },
    accentCoral: palette.augmentColor({
      color: {
        main: "#FF7F50",
        dark: "#C94E22",
        light: "#FFF6F3",
        contrastText: "#FFFFFF",
        hoverContained: "#CC5F2C",
        focused: "#FFAB8C",
        hoverOutlined: "#FFD8CA",
        disabled: "#EFEFF3",
      },
    }),
    grey: {
      ...palette.grey,
      50: "#F9F9F9",
      100: "#F5F5F6",
      200: "#EDEDEE",
      300: "#E5E5E6",
      400: "#CDCDCF",
      500: "#ACACB1",
      600: "#808084",
      700: "#545457",
      800: "#373739",
      900: "#1A1A1B",
      A200: "#F2F2F7",
    },
    accentDesert: palette.augmentColor({
      color: {
        main: "#FFBE28",
        dark: "#A05A00",
        light: "#FFFDF5",
        contrastText: "#FFFFFF",
        hoverContained: "#D79618",
        focused: "#FFE07E",
        hoverOutlined: "#FFF7D3",
        disabled: "#EFEFF3",
      },
    }),
  },
  mixins,
  shadows,
  transitions,
  zIndex,
  shape,
  breakpoints,
  direction,
  spacing,
};

export default theme;
