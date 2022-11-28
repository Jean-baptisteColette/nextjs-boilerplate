import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { IconButton } from "@components/buttons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onChangeLocale: (newLanguage: string) => void;
  locale?: string;
  ready: boolean;
};

export const LocalSwitch = ({
  onChangeLocale,
  locale = "en",
  ready,
}: Props) => {
  return ready ? (
    <Box
      justifyItems={"flex-end"}
      alignItems="center"
      sx={{
        marginLeft: "auto",
        marginTop: "auto",
        marginBottom: 0,
        marginRight: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IconButton
        color={"primary"}
        icon={faGlobe}
        onClick={() => {
          if (onChangeLocale) {
            onChangeLocale(locale === "en" ? "zh" : "en");
          }
        }}
      />
      <Typography
        variant={"caption"}
        sx={{
          color: locale === "en" ? "primary.main" : "action.active",
        }}
      >
        EN{locale === "en" ? "" : "/"}
        <Typography
          variant={"caption"}
          sx={{
            color: locale === "en" ? "action.active" : "primary.main",
          }}
        >
          {locale === "en" ? "/" : ""}中文
        </Typography>
      </Typography>
    </Box>
  ) : null;
};
