import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserDetails, IProps } from "./details";
import { IResponse } from "../../types";

const data: IResponse = {
  users: [
    {
      id: 1,
      name: "Wouter",
      score: 9,
      login: "Woutertje",
      avatar_url: "fakepath.png",
      followers: 19,
      following: 10,
      repos_url: "/fakepath/repos",
      html_url: "/fakepath"
    }
  ],
  data: {},
  status: 0,
  headers: {},
  config: {},
  statusText: ""
};

const userMock: IProps = {
  data: data
};

describe("The CustomListItem Component", () => {
  afterEach(cleanup);
  test("renders correctly", () => {
    const { asFragment } = render(<UserDetails data={data} />, {
      wrapper: MemoryRouter
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
