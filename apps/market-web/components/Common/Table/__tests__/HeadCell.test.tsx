import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import HeadCell from "../HeadCell";

describe("HeadCell components", () => {
  it("should renders HeadCell correctly", () => {
    const props = {
      children: <>children</>,
    };
    const component = renderer.create(<HeadCell {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
