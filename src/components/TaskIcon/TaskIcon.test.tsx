import { render } from "@testing-library/react";

import { getTaskStatusColor } from "../../__mocks__/statusColor";

import TaskStatusIcon from "./index";

jest.mock("../../__mocks__/statusColor");

describe("TaskStatusIcon Component", () => {
  test("renders with primary color when status is done", () => {
    (getTaskStatusColor as jest.Mock).mockReturnValue("primary");

    render(<TaskStatusIcon status="done" />);
    expect(screen).toMatchSnapshot();
  });

  test("renders with disabled color when status is todo", () => {
    (getTaskStatusColor as jest.Mock).mockReturnValue("disabled");

    render(<TaskStatusIcon status="todo" />);
    expect(screen).toMatchSnapshot();
  });
});
