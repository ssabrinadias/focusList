import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://6664c2d2932baf9032ac056c.mockapi.io/tasks",
    (_, res, ctx) => {
      return res(ctx.status(200), ctx.json({ message: "text for test" }));
    }
  ),
];
