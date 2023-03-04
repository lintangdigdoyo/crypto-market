import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "..";

const Story: ComponentMeta<typeof Typography> = {
  component: Typography,
  title: "web/Common/Typography",
  argTypes: {
    type: { description: "set html tag element" },
    variant: { description: "set element style based on variants" },
    className: { description: "override class" },
    bold: { description: "set font weight to bold" },
  },
};
export default Story;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const TypographyComponent = Template.bind({});
TypographyComponent.args = {
  type: "h1",
  variant: "heading1",
  children: "Typography heading 1",
};
