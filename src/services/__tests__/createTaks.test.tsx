import { rest } from "msw";

import { server } from "../../config/server";
import { createTask } from "../createTaks";

jest.mock("../../data/config", () => ({
  API_URL: "https://6664c2d2932baf9032ac056c.mockapi.io/",
  APP_MODE: "development",
}));

describe("getTasks function", () => {
  test("fetches tasks successfully", async () => {
    const tasks = await createTask({
      title: "title",
      description: "description",
      status: "todo",
      active: true,
    });

    expect(tasks).toEqual({
      active: true,
      createdAt: "2024-06-10T19:55:00.168Z",
      description: "description",
      id: "5",
      status: "todo",
      title: "title",
    });
  });
  test("fetches tasks error", async () => {
    server.use(
      rest.post(
        "https://6664c2d2932baf9032ac056c.mockapi.io/tasks",
        (_, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "text for test" }));
        }
      )
    );

    await expect(
      createTask({
        title: "title",
        description: "description",
        status: "todo",
        active: true,
      })
    ).rejects.toThrow("Request failed with status code 500");
  });
});
