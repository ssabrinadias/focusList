import { worker } from "./browser";

async function startWorker() {
  await worker.start();
}

startWorker().catch((error) => {
  console.error("Failed to start the worker:", error);
});
