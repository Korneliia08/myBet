import {configureStore} from "@reduxjs/toolkit";
import serviceReducer from "./reducers/serviceReducer";

const store = configureStore({
    reducer: {
        services: serviceReducer
    }
})
export default store;
