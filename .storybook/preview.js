import { RouterContext } from "next/dist/shared/lib/router-context";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n";
import theme from "../src/components/theme";

const withThemeProvider = (Story, context) => {
  const currentTheme = createTheme(theme);
  return (
    <Emotion10ThemeProvider theme={currentTheme}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <Story {...context} />
        </I18nextProvider>
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
export const parameters = {
  i18n,
  locale: "en",
  locales: {
    en: { title: "English", right: "🇺🇸" },
    zh: { title: "中国人", right: "🇨🇳" },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
