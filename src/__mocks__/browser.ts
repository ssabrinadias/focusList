import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

// import { handlers } from "./handlers";

export const worker = setupWorker(
  http.get("...", () => HttpResponse.json({ id: "abc-123" }))
);
console.log(worker.listHandlers());
