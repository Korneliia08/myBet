import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DefaultPanel from "./defaultPanel/DefaultPanel";
import AllEmployees from "./defaultPanel/dynamicSubPages/AllEmployees/AllEmployees";
import Default from "./defaultPanel/dynamicSubPages/default/Default";
import AllPricing from "./defaultPanel/dynamicSubPages/AllPricing/AllPricing";
import AllAboutUs from "./defaultPanel/dynamicSubPages/AllAboutUs/AllAboutUs";
import Registration from "./defaultPanel/dynamicSubPages/Registration/Registration";
import InformationAboutEmployee from "./defaultPanel/dynamicSubPages/AllEmployees/CardEmployee/InformationaAboutEmployee/InformationaAboutEmployee";
import ChooseEmpoloyee from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/ChooseEmpoloyee/ChooseEmpoloyee";
import ChooseService from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/ChooseService/ChooseService";
import ChooseDate from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/ChooseDate/ChooseDate";
import Veryfication from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/Veryfication/Veryfication";
import BasicData from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/BasicData/BasicData";
import ServiceInfo from "./defaultPanel/dynamicSubPages/ServiceInfo/ServiceInfo";
import Summary from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/Summary/Summary";
import { Provider } from "react-redux";
import store from "./data/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const router = createHashRouter(
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <DefaultPanel />,
        children: [
          {
            path: "/",
            element: <Default />,
          },
          {
            path: "service/:id",
            element: <ServiceInfo />,
          },
          {
            path: "allEmployees",
            element: <AllEmployees />,
          },
          {
            path: "employee/:id",
            element: <InformationAboutEmployee />,
          },
          {
            path: "aboutUs",
            element: <AllAboutUs />,
          },
          {
            path: "pricing",
            element: <AllPricing />,
          },
          {
            path: "registration",
            element: <Registration />,
            children: [
              {
                path: "employee/:idOfEmployee?",
                element: <ChooseEmpoloyee />,
              },
              {
                path: "service",
                element: <ChooseService />,
              },
              {
                path: "date",
                element: <ChooseDate />,
              },
              {
                path: "basicDate",
                element: <BasicData />,
              },
              {
                path: "veryfication",
                element: <Veryfication />,
              },
              {
                path: "summary",
                element: <Summary />,
              },
              {
                path: "",
                element: <Navigate to="/registration/employee"></Navigate>,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <Navigate to="/"></Navigate>,
      },
    ],
    { basename: "/myBet" },
  );
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
