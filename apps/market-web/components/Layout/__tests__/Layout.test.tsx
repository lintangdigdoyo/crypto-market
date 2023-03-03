import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import Layout from "..";

describe("Layout component", () => {
  it("should renders layout correctly", () => {
    const props = {
      children: <>children</>,
    };
    const component = renderer.create(<Layout {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
