import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Price from "../components/Price";

const Story: ComponentMeta<typeof Price> = {
  component: Price,
  title: "web/CryptoList/Price",
  argTypes: {
    value: { defaultValue: "-200000" },
  },
};
export default Story;

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />;

export const Component = Template.bind({});
