import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <h1>hejoo</h1>
        },
        {
            path: "*",
            element: <h1>hejoo</h1>
        }
    ], {basename:"/mybet"});
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
