import { AlertProps as MuiAlertProps } from "@mui/material";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface AlertProps extends MuiAlertProps {
  headerText?: string;
  descriptionText?: string;
  elevation?: number;
  iconName?: IconDefinition;
  isLoading?: boolean;
}
