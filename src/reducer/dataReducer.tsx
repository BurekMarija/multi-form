export interface UserData {
  name: string | null;
  email: string | null;
  phone: string | null;
}

const dataReducer = (
  state: UserData = { name: null, email: null, phone: null },
  action: ReturnType<typeof setName | typeof setEmail | typeof setPhone>
) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};
export default dataReducer;

export const setName = (data: string | null) => {
  return {
    type: "SET_NAME",
    payload: data,
  };
};

export const setEmail = (data: string | null) => {
  return {
    type: "SET_EMAIL",
    payload: data,
  };
};

export const setPhone = (data: string | null) => {
  return {
    type: "SET_PHONE",
    payload: data,
  };
};
