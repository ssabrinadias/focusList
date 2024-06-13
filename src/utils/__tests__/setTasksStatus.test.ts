import { ITaskStatus, setTasksStatus } from "../setTasksStatus";

describe("setTasksStatus", () => {
  test("should return correct status and active for create action", () => {
    const expected: ITaskStatus = { status: "todo", active: true };
    const result = setTasksStatus("create");
    expect(result).toEqual(expected);
  });

  test("should return correct status and active for done action", () => {
    const expected: ITaskStatus = { status: "done", active: false };
    const result = setTasksStatus("done");
    expect(result).toEqual(expected);
  });

  test("should return correct status and active for todo action", () => {
    const expected: ITaskStatus = { status: "todo", active: false };
    const result = setTasksStatus("todo");
    expect(result).toEqual(expected);
  });

  test("should return null for unknown action", () => {
    const result = setTasksStatus("unknown");
    expect(result).toBeNull();
  });

  test("should return null for empty action", () => {
    const result = setTasksStatus("");
    expect(result).toBeNull();
  });
});
