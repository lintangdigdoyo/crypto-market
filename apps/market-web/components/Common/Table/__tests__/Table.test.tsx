import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import Table from "../Table";
import HeadCell from "../HeadCell";
import BodyCell from "../BodyCell";

describe("Table components", () => {
  it("should renders Table correctly", () => {
    const props = {
      children: <>children</>,
    };
    const component = renderer.create(<Table {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should renders HeadCell correctly", () => {
    const props = {
      children: <>children</>,
    };
    const component = renderer.create(<HeadCell {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should renders BodyCell correctly", () => {
    const props = {
      children: <>children</>,
    };
    const component = renderer.create(<BodyCell {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
