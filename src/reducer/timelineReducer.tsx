const timelineReducer = (
  state: boolean = true,
  action: ReturnType<typeof setMonthly>
) => {
  switch (action.type) {
    case "SET_MONTHLY":
      return !state;
    default:
      return state;
  }
};
export default timelineReducer;

export const setMonthly = () => {
  return {
    type: "SET_MONTHLY",
  };
};
