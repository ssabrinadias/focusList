import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://6664c2d2932baf9032ac056c.mockapi.io/tasks",
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            createdAt: "2024-06-09T02:50:41.047Z",
            title: "title 1",
            description: "description 1",
            status: "done",
            active: false,
            id: "1",
          },
        ])
      );
    }
  ),
  rest.put(
    "https://6664c2d2932baf9032ac056c.mockapi.io/tasks/1",
    (_, res, ctx) => {
      return res(ctx.status(500));
    }
  ),
];
