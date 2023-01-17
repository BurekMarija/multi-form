import stepReducer from "./stepReducer";
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

const allReducers = combineReducers({
  stepReducer,
  dataReducer,
});
export default allReducers;
