import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import allReducers from "./reducer";
import {
  useSelector as reduxUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import App from "./App";

const store = configureStore({ reducer: allReducers });
type RootState = ReturnType<typeof store.getState>;

export const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
