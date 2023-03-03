import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import Table from "../Table";

describe("Table components", () => {
  it("should renders Table correctly", () => {
    const props = {
      children: <>children</>,
    };
    const component = renderer.create(<Table {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
