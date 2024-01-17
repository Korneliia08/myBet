import { createSlice } from "@reduxjs/toolkit";

const registrationReducer = createSlice({
  name: "registration",
  initialState: {
    idOfEmployee: 0,
    idOfServices: [],
    selectedDate: {
      start: "",
      end: "",
    },
    dataOfUser: {
      name: "",
      surname: "",
      prefixOfPhone: "",
      numberOfPhone: "",
      email: "",
    },
    availableDates: [],
    selectedDay: "",
    totalPrice: 0,
  },
  reducers: {
    setData(state, action) {
      return { ...state, ...action.payload };
    },
    addService(state, action) {
      return {
        ...state,
        idOfServices: [...state.idOfServices, action.payload],
      };
    },
    deleteService(state, action) {
      return {
        ...state,
        idOfServices: [
          ...state.idOfServices.filter(
            (serviceId) => serviceId !== action.payload,
          ),
        ],
      };
    },
    counterTotalSum(state, action) {
      return {
        ...state,
        totalPrice: Number(state.totalPrice) + Number(action.payload),
      };
    },
  },
});
export default registrationReducer.reducer;
export const { setData } = registrationReducer.actions;
export const { addService } = registrationReducer.actions;
export const { deleteService } = registrationReducer.actions;
export const { counterTotalSum } = registrationReducer.actions;
