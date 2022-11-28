import { MouseEvent } from "react";
import { ButtonTypeMap } from "@mui/material";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type IconButtonProps = ButtonTypeMap<StyledIconButtonProps>["props"];

type StyledIconButtonProps = {
  icon?: IconDefinition;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};
