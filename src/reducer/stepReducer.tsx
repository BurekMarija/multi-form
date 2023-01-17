const stepReducer = (
  state: ReturnType<typeof setStep>["payload"] = 1,
  action: ReturnType<typeof setStep>
) => {
  switch (action.type) {
    case "SET_STEP":
      return action.payload;
    default:
      return state;
  }
};
export default stepReducer;

export const setStep = (data: number) => {
  return {
    type: "SET_STEP",
    payload: data,
  };
};
