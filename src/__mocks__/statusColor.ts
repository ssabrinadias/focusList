export const getTaskStatusColor = jest.fn((status: string) => {
  if (status === "done") return "primary";
  return "disabled";
});
