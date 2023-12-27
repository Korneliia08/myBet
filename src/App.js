import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import DefaultPanel from "./defaultPanel/DefaultPanel";
import AllEmployees from "./defaultPanel/dynamicSubPages/AllEmployees/AllEmployees";
import Default from "./defaultPanel/dynamicSubPages/default/Default";

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
                    element: <AllEmployees/>
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
