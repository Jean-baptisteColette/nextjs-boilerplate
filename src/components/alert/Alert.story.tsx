import { Meta, Story } from "@storybook/react/types-6-0";
import { DEFAULT_PARAMETERS } from "@components/stories/shared.stories";
import { Alert } from "./Alert";
import { AlertProps } from "./definitions";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: DEFAULT_PARAMETERS,
} as Meta;

const Template: Story<AlertProps> = (args) => {
  const { descriptionText, color, iconName, isLoading, sx, ...rest } = args;
  const { t } = useTranslation();
  return (
    <Alert
      headerText={t(`common:${color}`)}
      descriptionText={descriptionText}
      color={color}
      iconName={iconName}
      isLoading={isLoading}
      sx={sx}
      {...rest}
    />
  );
};

export const DefaultError = Template.bind({});
DefaultError.args = {
  variant: "standard",
  color: "error",
  iconName: faCheck,
  descriptionText: "description...",
};
export const DefaultInfo = Template.bind({});
DefaultInfo.args = {
  variant: "standard",
  color: "info",
  iconName: faCheck,
  descriptionText: "description...",
};
export const DefaultSuccess = Template.bind({});
DefaultSuccess.args = {
  variant: "standard",
  color: "success",
  iconName: faCheck,
  descriptionText: "description...",
};

export const DefaultWarning = Template.bind({});
DefaultWarning.args = {
  variant: "standard",
  color: "warning",
  iconName: faCheck,
  descriptionText: "description...",
};

export const DefaultLoading = Template.bind({});
DefaultLoading.args = {
  variant: "standard",
  color: "error",
  isLoading: true,
  headerText: "header text",
  iconName: faCheck,
  descriptionText: "description...",
};
