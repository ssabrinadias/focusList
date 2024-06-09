import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://6664c2d2932baf9032ac056c.mockapi.io/tasks", () => {
    return HttpResponse.json([
      {
        createdAt: "2024-06-09T02:50:41.047Z",
        title: "Teste 1",
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
      {
        createdAt: "2024-06-08T04:11:37.010Z",
        title: "title 5",
        description: "description 5",
        status: "status 5",
        active: false,
        id: "5",
      },
      {
        createdAt: "2024-06-08T21:59:17.151Z",
        title: "title 6",
        description: "description 6",
        status: "canceled",
        active: false,
        id: "6",
      },
      {
        createdAt: "2024-06-08T03:28:03.453Z",
        title: "title 7",
        description: "description 7",
        status: "status 7",
        active: false,
        id: "7",
      },
      {
        createdAt: "2024-06-08T16:35:28.847Z",
        title: "title 8",
        description: "description 8",
        status: "done",
        active: false,
        id: "8",
      },
      {
        createdAt: "2024-06-08T04:49:07.183Z",
        title: "title 9",
        description: "description 9",
        status: "doing",
        active: false,
        id: "9",
      },
    ]);
  }),
];
