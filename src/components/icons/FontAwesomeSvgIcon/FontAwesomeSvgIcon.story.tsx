import { Meta, Story } from "@storybook/react";
import { DEFAULT_PARAMETERS } from "@components/stories/shared.stories";
import { FontAwesomeSvgIcon, FontAwesomeSvgIconProps } from "./index";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Components/Icons/FontAwesomeSvgIcon",
  component: FontAwesomeSvgIcon,
  parameters: DEFAULT_PARAMETERS,
} as Meta<typeof FontAwesomeSvgIcon>;

const Template: Story<FontAwesomeSvgIconProps> = ({
  icon,
}: FontAwesomeSvgIconProps) => <FontAwesomeSvgIcon icon={icon} />;

export const Default = Template.bind({});
Default.args = {
  icon: faBars,
};
