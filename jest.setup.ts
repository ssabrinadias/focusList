import { server } from "./src/config/server";

import "@testing-library/jest-dom";
import "@testing-library/react";

jest.mock("./src/data/config", () => ({
  API_URL: "https://6664c2d2932baf9032ac056c.mockapi.io/",
  APP_MODE: "development",
}));

const originalEnv = process.env;
beforeEach(() => {
  jest.resetModules();
  process.env = {
    ...originalEnv,
    VITE_API_URL: "https://6664c2d2932baf9032ac056c.mockapi.io/",
  };
});

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  process.env = originalEnv;
});

afterAll(() => server.close());
