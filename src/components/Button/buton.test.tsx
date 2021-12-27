import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("test Button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText("Nice");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("BUTTON");
    expect(element).toHaveClass("btn btn-default");
  });

  it("should render the correct component base on different props", () => {});

  it("should render a link when btnType equals link and href is provided", () => {});

  it("should render a disabled button when disabled set to true", () => {});
});
