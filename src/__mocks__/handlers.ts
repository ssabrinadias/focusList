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
          {
            createdAt: "2024-06-08T06:47:05.841Z",
            title: "title 2",
            description: "description 2",
            status: "doing",
            active: false,
            id: "2",
          },
          {
            createdAt: "2024-06-08T12:24:47.637Z",
            title: "title 3",
            description: "description 3",
            status: "doing",
            active: false,
            id: "3",
          },
          {
            createdAt: "2024-06-08T02:58:00.152Z",
            title: "title 4",
            description: "description 4",
            status: "done",
            active: false,
            id: "4",
          },
        ])
      );
    }
  ),
];
