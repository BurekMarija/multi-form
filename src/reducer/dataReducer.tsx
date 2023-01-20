import { AnyAction } from "@reduxjs/toolkit";
interface Plan {
  name: string;
  price: number;
}

export interface UserData {
  name: string | null;
  email: string | null;
  phone: string | null;
  plan: Plan | null;
}

const dataReducer = (
  state = {
    name: null,
    email: null,
    phone: null,
    plan: { name: "", price: 0 },
  },
  action: AnyAction
) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_PLAN":
      return { ...state, plan: action.payload };

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

export const setPlan = (data: Plan | null) => {
  return {
    type: "SET_PLAN",
    payload: data,
  };
};
