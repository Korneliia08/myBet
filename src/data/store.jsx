import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from "./reducers/serviceReducer";
import employeeReducer from "./reducers/employeeReducer";
import stateOfPageReducer from "./reducers/stateOfPageReducer";
import registrationReducer from "./reducers/registrationReducer";

const store = configureStore({
  reducer: {
    services: serviceReducer,
    employees: employeeReducer,
    stateOfPage: stateOfPageReducer,
    registration: registrationReducer,
  },
});
export default store;
