import {createSlice} from "@reduxjs/toolkit";

const employeeReducer = createSlice({
    name: 'employees',
    initialState:
        {
            employees: []
        },
    reducers: {
        setEmployees(state, action) {
            return {...state, employees: [...action.payload]};
        }
    }
});
export const {setEmployees} = employeeReducer.actions;
export default employeeReducer.reducer;
