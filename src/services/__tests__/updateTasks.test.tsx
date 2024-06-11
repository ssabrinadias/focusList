import { rest } from "msw";

import { server } from "../../config/server";
import { updateTask } from "../updateTasks";

describe("updateTask function", () => {
  test("updates task successfully", async () => {
    const updatedTask = await updateTask(1, { status: "completed" });

    expect(updatedTask).toEqual({
      id: "1",
      status: "completed",
    });
  });

  test("updates task with error", async () => {
    server.use(
      rest.put(
        "https://6664c2d2932baf9032ac056c.mockapi.io/tasks/:taskId",
        (_, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "text for test" }));
        }
      )
    );
    await expect(updateTask(1, { status: "completed" })).rejects.toThrow(
      "Request failed with status code 500"
    );
  });
});
