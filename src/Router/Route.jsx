import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,

    },
    {
        path: "/apps",
        element: <p>Apps</p>
    },
    {
        path: "/installation",
        element: <p>Installation</p>
    }
]);


export default router;