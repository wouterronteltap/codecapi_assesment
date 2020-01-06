import React from "react";
import { render, cleanup } from "@testing-library/react";
import { SearchInput } from "./input";

describe("The SearchInput Component", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    const { asFragment } = render(<SearchInput lastquery={""} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should be initialized with custom lastquery", () => {
    const query = "wouter";
    const component = render(<SearchInput lastquery={query} />);
    const input: HTMLInputElement = component.getByPlaceholderText(
      "Search GitHub user"
    ) as HTMLInputElement;
    expect(input.value).toBe(query);
  });
});
