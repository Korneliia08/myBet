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
                    path: "/allEmployees",
                    element: <AllEmployees/>,
                },
                {
                    path: "/currentEmployee",
                    element: <InformationAboutEmployee/>
                },
                {
                    path: "/aboutUs",
                    element: <AllAboutUs/>
                },
                {
                    path: "/pricing",
                    element: <AllPricing/>
                },
                {
                    path: "/registration",
                    element: <Registration/>
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
