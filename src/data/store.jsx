import {configureStore} from "@reduxjs/toolkit";
import serviceReducer from "./reducers/serviceReducer";
import employeeReducer from "./reducers/employeeReducer";

const store = configureStore({
    reducer: {
        services: serviceReducer,
        employees: employeeReducer
    }
})
export default store;
