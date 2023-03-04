import type { ComponentStory, ComponentMeta } from "@storybook/react";

import Table from "../Table";
import HeadCell from "../HeadCell";
import BodyCell from "../BodyCell";

const Story: ComponentMeta<typeof Table> = {
  component: Table,
  title: "web/Common/Table",
  argTypes: {},
};
export default Story;

const Template: ComponentStory<typeof Table> = () => (
  <Table>
    <thead>
      <tr>
        <HeadCell>HeadCell 1</HeadCell>
        <HeadCell>HeadCell 2</HeadCell>
        <HeadCell>HeadCell 3</HeadCell>
      </tr>
    </thead>
    <tbody>
      <tr>
        <BodyCell>BodyCell 1</BodyCell>
        <BodyCell>BodyCell 2</BodyCell>
        <BodyCell>BodyCell 3</BodyCell>
      </tr>
      <tr>
        <BodyCell>BodyCell 4</BodyCell>
        <BodyCell>BodyCell 5</BodyCell>
        <BodyCell>BodyCell 6</BodyCell>
      </tr>
    </tbody>
  </Table>
);

export const TableComponent = Template.bind({});
