import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Box } from "@mui/material";
import { PageLayoutProps } from "./definitions";

const PageLayout = ({ children }: PageLayoutProps) => {
  const { t } = useTranslation(["common"]);

  return (
    <Box display="flex" height="100vh" flexDirection="column">
      <Head>
        <title>{t("common:title")}</title>
      </Head>
      {children}
    </Box>
  );
};

export default PageLayout;
