import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../components/createEmotionCache";
import React, { useState } from "react";
import Head from "next/head";
import { AppPageProps } from "../common";
import { appWithTranslation, useTranslation } from "next-i18next";
import { LocalisedThemeProvider } from "../modules/localised-theme-provider";

function MyApp({ Component, pageProps }: AppPageProps) {
  // Query client is in a useState hook so that it can be re-hydrated
  // when the app is rendered on the server.
  // See https://react-query.tanstack.com/guides/ssr#using-hydration
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000,
          },
        },
      })
  );
  const clientSideEmotionCache = pageProps.emotionCache
    ? pageProps.emotionCache
    : createEmotionCache();

  const { t } = useTranslation(["common"]);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>{t("common:title")}</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <LocalisedThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </LocalisedThemeProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);
