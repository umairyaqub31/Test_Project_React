import { combineReducers } from "redux";
import driverSlice from "./driverSlice";

const rootReducer = combineReducers({
  driver: driverSlice,
});

export default rootReducer;
