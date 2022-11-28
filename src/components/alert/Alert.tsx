import { Alert as MuiAlert, AlertTitle, Skeleton } from "@mui/material";
import { FC } from "react";
import { FontAwesomeSvgIcon } from "@components/icons/FontAwesomeSvgIcon";
import { AlertProps } from "./definitions";
import Typography from "@mui/material/Typography";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Alert: FC<AlertProps> = (props) => {
  const {
    headerText,
    descriptionText,
    color,
    iconName,
    isLoading,
    sx,
    ...rest
  } = props;

  if (isLoading) {
    return <Skeleton variant="rectangular" height="80px" />;
  }

  return (
    <MuiAlert
      color={color}
      icon={
        iconName ? (
          <FontAwesomeSvgIcon icon={iconName} />
        ) : (
          <FontAwesomeSvgIcon icon={faCheck} />
        )
      }
      sx={{
        "&.MuiAlert-standardSuccess": {
          color: (theme) => theme.palette.success.dark,
          backgroundColor: (theme) => theme.palette.success.light,
          ".MuiAlert-action": {
            color: `${color}.dark`,
          },
          ".MuiAlert-icon": {
            color: `${color}.main`,
          },
          ".MuiAlert-message": {
            color: `${color}.dark`,
          },
        },
        "&.MuiAlert-standardPrimary": {
          color: (theme) => theme.palette.primary.dark,
          backgroundColor: (theme) => theme.palette.primary.light,
          ".MuiAlert-action": {
            color: `${color}.dark`,
          },
          ".MuiAlert-icon": {
            color: `${color}.main`,
          },
          ".MuiAlert-message": {
            color: `${color}.dark`,
          },
        },
        "&.MuiAlert-standardSecondary": {
          color: (theme) => theme.palette.primary.dark,
          backgroundColor: (theme) => theme.palette.grey[50],
          ".MuiAlert-action": {
            color: `primary.dark`,
          },
          ".MuiAlert-icon": {
            color: `primary.main`,
          },
          ".MuiAlert-message": {
            color: `primary.dark`,
          },
        },
        "&.MuiAlert-standardError": {
          color: (theme) => theme.palette.error.dark,
          backgroundColor: (theme) => theme.palette.error.light,
          ".MuiAlert-action": {
            color: `${color}.dark`,
          },
          ".MuiAlert-icon": {
            color: `${color}.main`,
          },
          ".MuiAlert-message": {
            color: `${color}.dark`,
          },
        },
        "&.MuiAlert-standardWarning": {
          color: (theme) => theme.palette.warning.dark,
          backgroundColor: (theme) => theme.palette.warning.light,
          ".MuiAlert-action": {
            color: `${color}.dark`,
          },
          ".MuiAlert-icon": {
            color: `${color}.main`,
          },
          ".MuiAlert-message": {
            color: `${color}.dark`,
          },
        },
        "&.MuiAlert-standardInfo": {
          color: (theme) => theme.palette.info.dark,
          backgroundColor: (theme) => theme.palette.info.light,
          ".MuiAlert-action": {
            color: `${color}.dark`,
          },
          ".MuiAlert-icon": {
            color: `${color}.main`,
          },
          ".MuiAlert-message": {
            color: `${color}.dark`,
          },
        },

        ...sx,
      }}
      {...rest}
    >
      {headerText && (
        <AlertTitle sx={{ typography: "h6" }}>{headerText}</AlertTitle>
      )}
      {Boolean(descriptionText) && (
        <Typography variant={"body3"}>{descriptionText}</Typography>
      )}
    </MuiAlert>
  );
};

Alert.defaultProps = {
  variant: "standard",
  elevation: 0,
  sx: {},
};
