import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { CustomListItem } from "./listitem";
import { IUser } from "../../types";

const userMock: IUser = {
  id: 1,
  name: "Wouter",
  score: 9,
  login: "Woutertje",
  avatar_url: "fakepath.png",
  followers: 19,
  following: 10,
  repos_url: "/fakepath/repos",
  html_url: "/fakepath"
};

describe("The CustomListItem Component", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    const { asFragment } = render(<CustomListItem user={userMock} />, {
      wrapper: MemoryRouter
    });
    expect(asFragment()).toMatchSnapshot();
  });

  test("should have link and navigate", () => {
    const { getByText } = render(<CustomListItem user={userMock} />, {
      wrapper: MemoryRouter
    });
    fireEvent.click(getByText("more"));
    console.log(window.location.pathname);
  });
});
