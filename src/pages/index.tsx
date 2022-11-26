import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Box, Typography } from "@mui/material";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { getUser } from "../modules/user/service";

export const getServerSideProps = async ({
  locale,
}: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["user"], getUser);

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

const Home = () => {
  const { t } = useTranslation(["common"]);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: Infinity,
  });
  return (
    <>
      <Head>
        <title>{t("common:title")}</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant={"h6"}>
          Welcome{" "}
          {isLoading || isError ? (
            <Typography variant={"inherit"} display={"inline"}>
              Loading...
            </Typography>
          ) : (
            <Typography
              variant={"inherit"}
              display={"inline"}
            >{`${data?.firstName} ${data?.lastName}`}</Typography>
          )}
        </Typography>
      </Box>
    </>
  );
};

export default Home;
