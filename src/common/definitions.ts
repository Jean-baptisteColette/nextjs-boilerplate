import { NextApiResponse, NextApiRequest } from "next";
import { AppProps } from "next/app";
import { EmotionCache } from "@emotion/react";
import { SSRConfig } from "next-i18next";

export interface AppServerProps {
  dehydratedState?: unknown;
  emotionCache?: EmotionCache;
  error?: any;
}

export type AppPageProps = AppProps<AppServerProps & SSRConfig>;

export type HttpResponseState = {
  [key: string]: number;
};

export type Handler = (
  request: NextApiRequest,
  response: NextApiResponse
) => Promise<any> | undefined;
