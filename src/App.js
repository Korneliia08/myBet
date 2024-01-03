import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import DefaultPanel from "./defaultPanel/DefaultPanel";
import AllEmployees from "./defaultPanel/dynamicSubPages/AllEmployees/AllEmployees";
import Default from "./defaultPanel/dynamicSubPages/default/Default";
import AllPricing from "./defaultPanel/dynamicSubPages/AllPricing/AllPricing";
import AllAboutUs from "./defaultPanel/dynamicSubPages/AllAboutUs/AllAboutUs";
import Registration from "./defaultPanel/dynamicSubPages/Registration/Registration";
import InformationAboutEmployee
    from "./defaultPanel/dynamicSubPages/AllEmployees/CardEmployee/InformationaAboutEmployee/InformationaAboutEmployee";
import ChooseEmpoloyee
    from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/ChooseEmpoloyee/ChooseEmpoloyee";
import ChooseService from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/ChooseService/ChooseService";
import Summary from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/Summary/Summary";
import ChooseDate from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/ChooseDate/ChooseDate";
import Veryfication from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/Veryfication/Veryfication";
import BasicData from "./defaultPanel/dynamicSubPages/Registration/stepsComponents/BasicData/BasicData";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <DefaultPanel/>,
            children: [
                {
                    path: "/",
                    element: <Default/>
                },
                {
                    path: "allEmployees",
                    element: <AllEmployees/>,
                },
                {
                    path: "currentEmployee",
                    element: <InformationAboutEmployee/>
                },
                {
                    path: "aboutUs",
                    element: <AllAboutUs/>
                },
                {
                    path: "pricing",
                    element: <AllPricing/>
                },
                {
                    path: "registration",
                    element: <Registration/>,
                    children: [
                        {
                            path: "employee",
                            element: <ChooseEmpoloyee/>
                        },
                        {
                            path: "service",
                            element: <ChooseService/>
                        },
                        {
                            path: "date",
                            element: <ChooseDate/>
                        },
                        {
                            path: "basicDate",
                            element: <BasicData/>
                        },
                        {
                            path: "veryfication",
                            element: <Veryfication/>
                        },
                        {
                            path: "summary",
                            element: <Summary/>
                        },
                        {
                            path: "",
                            element: <Navigate to="/registration/employee"></Navigate>
                        }
                    ]
                }
            ]
        },
        {
            path: "*",
            element: <Navigate to="/"></Navigate>
        }
    ], {basename: "/mybet"});
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
