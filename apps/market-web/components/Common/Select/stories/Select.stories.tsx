import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "..";

const Story: ComponentMeta<typeof Select> = {
  component: Select,
  title: "web/Common/Select",
  argTypes: {
    options: {
      defaultValue: [{ label: "", value: "" }],
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectOption = Template.bind({});
SelectOption.args = {
  options: [
    {
      label: "Label 1",
      value: "Value 1",
    },
    {
      label: "Label 2",
      value: "Value 2",
    },
  ],
};
