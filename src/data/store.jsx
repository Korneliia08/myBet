import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./reducers/serviceReducer";
import employeeReducer from "./reducers/employeeReducer";
import stateOfPageReducer from "./reducers/stateOfPageReducer";

const store = configureStore({
  reducer: {
    services: serviceReducer,
    employees: employeeReducer,
    stateOfPage: stateOfPageReducer,
  },
});
export default store;
