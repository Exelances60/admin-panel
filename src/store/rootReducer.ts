import { combineReducers } from "redux";
import CompanyReducer from "./ComponyData/CompanyReducer";
export const rootReducer = combineReducers({
  company: CompanyReducer,
});
