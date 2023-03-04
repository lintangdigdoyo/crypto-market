import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Percentage from "../components/Percentage";

const Story: ComponentMeta<typeof Percentage> = {
  component: Percentage,
  title: "web/CryptoList/Percentage",
  argTypes: {
    value: { defaultValue: "100" },
  },
};
export default Story;

const Template: ComponentStory<typeof Percentage> = (args) => (
  <Percentage {...args} />
);

export const Component = Template.bind({});
