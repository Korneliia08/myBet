import {createSlice} from "@reduxjs/toolkit";

const serviceReducer = createSlice({
    name: 'services',
    initialState: {
        services: []
    },
    reducers: {
        setServices(state, action) {
            return {...state, services: [...action.payload]}
        }
    }
})
export const {setServices} = serviceReducer.actions;
export default serviceReducer.reducer;
