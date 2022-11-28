import React from "react";
import { SxProps, Theme } from "@mui/material";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type FontAwesomeSvgIconProps = {
  icon: IconDefinition;
  sx?: SxProps<Theme> | undefined;
  onClick?:
    | ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void)
    | undefined;
};
