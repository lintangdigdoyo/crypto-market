import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Logo from "../components/Logo";

const Story: ComponentMeta<typeof Logo> = {
  component: Logo,
  title: "web/CryptoList/Logo",
  argTypes: {
    color: { defaultValue: "#0000FF" },
    logoUrl: {
      defaultValue:
        "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_ETH.svg",
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Component = Template.bind({});
