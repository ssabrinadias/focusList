import { render, RenderOptions } from "@testing-library/react";

import { AllTheProviders } from "./ProvidersForTest";

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export { customRender as render };
