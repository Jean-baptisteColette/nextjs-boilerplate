import { Meta, Story } from "@storybook/react/types-6-0";
import { DEFAULT_PARAMETERS } from "@components/stories/shared.stories";
import { IconButton } from "./IconButton";
import { IconButtonProps } from "./definitions";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  parameters: DEFAULT_PARAMETERS,
} as Meta;

const Template: Story<IconButtonProps> = (args) => {
  return <IconButton {...args} />;
};

export const IconOnlyXClose = Template.bind({});
IconOnlyXClose.args = {};

export const IconOnlyCustom = Template.bind({});
IconOnlyCustom.args = {
  icon: faGlobe,
};
