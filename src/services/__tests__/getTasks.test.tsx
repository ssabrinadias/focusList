import { rest } from "msw";

import { server } from "../../__mocks__/server";
import { getTasks } from "../getTasks";

jest.mock("../../data/config", () => ({
  API_URL: "https://6664c2d2932baf9032ac056c.mockapi.io/",
  APP_MODE: "development",
}));

describe("getTasks function", () => {
  test("fetches tasks successfully", async () => {
    const tasks = await getTasks();

    expect(tasks).toEqual({
      message: "text for test",
    });
  });
  test("fetches tasks error", async () => {
    server.use(
      rest.get(
        "https://6664c2d2932baf9032ac056c.mockapi.io/tasks",
        (_, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "text for test" }));
        }
      )
    );

    await expect(getTasks()).rejects.toThrow(
      "Request failed with status code 500"
    );
  });
});
