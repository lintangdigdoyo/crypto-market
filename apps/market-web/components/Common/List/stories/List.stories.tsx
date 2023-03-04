import type { ComponentStory, ComponentMeta } from "@storybook/react";

import List from "..";

const Story: ComponentMeta<typeof List> = {
  component: List,
  title: "web/Common/List",
  argTypes: {},
};
export default Story;

const Template: ComponentStory<typeof List> = () => {
  return (
    <List>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </List>
  );
};

export const ListComponent = Template.bind({});
