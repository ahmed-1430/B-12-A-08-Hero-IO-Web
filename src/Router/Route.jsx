import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import Apps from "../Pages/Apps";
import AppsLayout from "../Layout/AppsLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,

    },
    {
        path: "/apps",
        element: <AppsLayout></AppsLayout>,
        children: [
            {
                path: "",
                element: <Apps></Apps>
            }
        ]
    },
    {
        path: "/installation",
        element: <p>Installation</p>
    }
]);


export default router;