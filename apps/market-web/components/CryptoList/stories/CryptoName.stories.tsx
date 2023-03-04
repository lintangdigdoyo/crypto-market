import type { ComponentStory, ComponentMeta } from "@storybook/react";

import CryptoName from "../components/CryptoName";

const Story: ComponentMeta<typeof CryptoName> = {
  component: CryptoName,
  title: "web/CryptoList/CryptoName",
  argTypes: {
    color: { defaultValue: "#0000FF" },
    logoUrl: {
      defaultValue:
        "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_ETH.svg",
    },
    name: { defaultValue: "Ethereum" },
    symbol: { defaultValue: "ETH" },
  },
};
export default Story;

const Template: ComponentStory<typeof CryptoName> = (args) => (
  <CryptoName {...args} />
);

export const Component = Template.bind({});
