import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import App from "../App";
import Services from "../pages/services";
import ServicesInfo from "../pages/services-info";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            }
            ,{
                path: "/services",
                element: <Services/>
            },
            {
                path: "/services/:id",
                element: <ServicesInfo/>
            }
        ]
    }

])