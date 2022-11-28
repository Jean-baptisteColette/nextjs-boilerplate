import { useTranslation } from "next-i18next";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@modules/user/service";
import { Alert } from "@components/alert";
import { useRouter } from "next/router";
import { LocalSwitch } from "@modules/home/components/LocalSwitch";

const HomePage = () => {
  const { t, i18n, ready } = useTranslation(["common"]);
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: Infinity,
  });

  const changeLocal = (newLanguage: string) => {
    router.push({ pathname, query }, asPath, { locale: newLanguage });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant={"h6"}>
          {t("common:welcome")}{" "}
          {isLoading || isError ? (
            <Typography variant={"inherit"} display={"inline"}>
              {t("common:loading")}...
            </Typography>
          ) : (
            <Typography variant={"inherit"} display={"inline"}>
              {`${data?.firstName} ${data?.lastName}`}
            </Typography>
          )}
        </Typography>
      </Box>
      <Alert
        variant={"standard"}
        color={"info"}
        headerText={t("common:info")}
      />
      <Box sx={{ flex: 1, display: "flex" }}>
        <LocalSwitch
          locale={i18n.language}
          ready={ready}
          onChangeLocale={changeLocal}
        />
      </Box>
    </>
  );
};

export default HomePage;
