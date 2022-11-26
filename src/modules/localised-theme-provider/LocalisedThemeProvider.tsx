import React, { useMemo, PropsWithChildren } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useRouter } from "next/router";
import theme from "../../components/theme";
import * as locales from "@mui/material/locale";

export type LocalisedThemeProviderProps = PropsWithChildren<{}>;

export function LocalisedThemeProvider({
  children,
}: LocalisedThemeProviderProps) {
  const { locale } = useRouter();

  const themeWithLocale = useMemo(() => {
    const muiLocale = getMuiLocaleFromLanguage(locale);
    // @ts-ignore
    return responsiveFontSizes(createTheme(theme, muiLocale));
  }, [locale]);

  return <ThemeProvider theme={themeWithLocale}>{children}</ThemeProvider>;
}

function getMuiLocaleFromLanguage(lang?: string) {
  switch (lang) {
    case "en":
      return locales.enUS;
    case "zh":
      return locales.zhCN;
    default:
      return locales.enUS;
  }
}
