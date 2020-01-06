import { renderHook, cleanup } from "@testing-library/react-hooks";
import axios from "axios";
import { useApi } from "./useApi";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("UseDataApi hook", () => {
  afterEach(cleanup);

  test("should be initialized with emtpy", () => {
    const { result } = renderHook(() => useApi());
    console.log(result);
  });

  // test("fetches successfully data from an API", async () => {
  //   const data = {
  //     users: [
  //       {
  //         login: "wouter",
  //         id: 3000
  //       },
  //       {
  //         login: "wouter2",
  //         id: 3001
  //       }
  //     ]
  //   };
  //   mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
  // });
});
