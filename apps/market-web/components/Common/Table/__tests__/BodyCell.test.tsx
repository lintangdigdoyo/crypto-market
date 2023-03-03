import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import BodyCell from "../BodyCell";

describe("Table components", () => {
  it("should renders BodyCell correctly", () => {
    const props = {
      children: <>children</>,
    };
    const component = renderer.create(<BodyCell {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
