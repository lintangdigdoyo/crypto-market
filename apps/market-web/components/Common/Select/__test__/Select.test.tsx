import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Select from "..";

describe("Select component", () => {
  it("should renders all of the labels and values correctly", () => {
    const options = [
      { label: "dummylabel-1", value: "dummyvalue-1" },
      { label: "dummylabel-2", value: "dummyvalue-2" },
      { label: "dummylabel-3", value: "dummyvalue-3" },
    ];
    render(<Select options={options} />);

    const option1 = screen.getByTestId("option-0");
    expect(option1).toHaveValue("dummyvalue-1");
    expect(option1).toHaveTextContent("dummylabel-1");

    const option2 = screen.getByTestId("option-1");
    expect(option2).toHaveValue("dummyvalue-2");
    expect(option2).toHaveTextContent("dummylabel-2");

    const option3 = screen.getByTestId("option-2");
    expect(option3).toHaveValue("dummyvalue-3");
    expect(option3).toHaveTextContent("dummylabel-3");
  });

  it("should be able to select and return the correct value", () => {
    const options = [
      { label: "dummylabel-1", value: "dummyvalue-1" },
      { label: "dummylabel-2", value: "dummyvalue-2" },
      { label: "dummylabel-3", value: "dummyvalue-3" },
    ];
    render(<Select options={options} />);

    const select = screen.getByTestId("select");
    fireEvent.change(select, { target: { value: "dummyvalue-3" } });

    const selectedOption = screen.getByRole("option", { name: "dummylabel-3" });
    expect((selectedOption as HTMLOptionElement).selected).toBeTruthy();
    expect((select as HTMLSelectElement).value).toBe("dummyvalue-3");
  });
});
