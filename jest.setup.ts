import { server } from "./src/__mocks__/server";

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

// Inicializando o servidor antes de todos os testes
beforeAll(() => server.listen());

// Reinicializando o servidor após cada teste
afterEach(() => {
  server.resetHandlers();
  process.env = originalEnv;
});

// Desligando o servidor após todos os testes
afterAll(() => server.close());
