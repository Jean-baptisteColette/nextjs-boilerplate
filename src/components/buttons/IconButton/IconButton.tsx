import { IconButtonProps } from "./definitions";
import FontAwesomeSvgIcon from "@components/icons/FontAwesomeSvgIcon/FontAwesomeSvgIcon";
import { IconButton as MuiIconButton } from "@mui/material";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const IconButton = (props: IconButtonProps) => {
  const { icon, sx, color = "primary", ...otherProps } = props;
  return (
    <MuiIconButton
      {...otherProps}
      sx={{
        padding: (theme) => theme.spacing(1),
        svg: {
          width: 24,
          height: 24,
          color: color + ".main",
        },
        "&:hover": {
          backgroundColor: "action.hover",
          svg: {
            color: color + ".main",
          },
        },
        ...sx,
      }}
    >
      <FontAwesomeSvgIcon icon={icon || faClose} />
    </MuiIconButton>
  );
};
