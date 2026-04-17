import { Alert as MuiAlert, AlertTitle, Skeleton } from "@mui/material";
import { FC } from "react";
import { FontAwesomeSvgIcon } from "@components/icons/FontAwesomeSvgIcon";
import { AlertProps } from "./definitions";
import Typography from "@mui/material/Typography";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

/**
 * Returns the three repeated MuiAlert sub-selector overrides for a given color.
 * This avoids duplicating the same three lines across every color variant.
 */
const getAlertSubSelectorSx = (color: string) => ({
  ".MuiAlert-action": { color: `${color}.dark` },
  ".MuiAlert-icon": { color: `${color}.main` },
  ".MuiAlert-message": { color: `${color}.dark` },
});

export const Alert: FC<AlertProps> = ({
  headerText,
  descriptionText,
  color,
  iconName,
  isLoading,
  sx = {},
  variant = "standard",
  elevation = 0,
  ...rest
}: AlertProps) => {
  if (isLoading) {
    return <Skeleton variant="rectangular" height="80px" />;
  }

  // Build the variant-specific selector only when a color is provided.
  // This replaces six nearly-identical hardcoded blocks.
  const colorStr = color as string | undefined;
  const variantSelectorSx = colorStr
    ? {
        [`&.MuiAlert-${variant}${colorStr
          .charAt(0)
          .toUpperCase()}${colorStr.slice(1)}`]: {
          ...getAlertSubSelectorSx(colorStr),
        },
      }
    : {};

  return (
    <MuiAlert
      color={color}
      variant={variant}
      elevation={elevation}
      icon={<FontAwesomeSvgIcon icon={iconName ?? faCheck} />}
      sx={{
        ...variantSelectorSx,
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
