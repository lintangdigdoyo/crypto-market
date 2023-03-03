import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import List from "..";

describe("List component", () => {
  it("should renders List correctly", () => {
    const props = {
      children: <>children</>,
    };
    const component = renderer.create(<List {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
