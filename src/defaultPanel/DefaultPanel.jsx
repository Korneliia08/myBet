import Header from "./staticComponents/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./staticComponents/Footer/Footer";
import React, { useEffect } from "react";
import axios from "axios";
import { setServices } from "../data/reducers/serviceReducer";
import { useDispatch } from "react-redux";
import { setEmployees } from "../data/reducers/employeeReducer";
import { setState } from "../data/reducers/stateOfPageReducer";
import ArrowTop from "./components/ArrowTop/ArrowTop";

const DefaultPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://api.fenek.tech/registerPage/secondTemplate/services").then(
      (response) => {
        dispatch(setServices(response.data.value));
      },
    );
    axios("https://api.fenek.tech/registerPage/secondTemplate/employees").then(
      (response) => {
        dispatch(setEmployees(response.data.value));
      },
    );
    axios("https://api.fenek.tech/registerPage/secondTemplate/defaultData")
      .then((response) => {
        dispatch(setState(response.data.value));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flexibleBlock">
      <Header />
      <Outlet />
      <ArrowTop />
      <Footer />
    </div>
  );
};
export default DefaultPanel;
