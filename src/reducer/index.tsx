import stepReducer from "./stepReducer";
import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import timelineReducer from "./timelineReducer";

const allReducers = combineReducers({
  stepReducer,
  dataReducer,
  timelineReducer,
});
export default allReducers;
