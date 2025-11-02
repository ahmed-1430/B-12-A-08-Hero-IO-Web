import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import Apps from "../Pages/Apps";
import AppsLayout from "../Layout/AppsLayout";
import AppDetailsLayout from "../Layout/AppDetailsLayout";
import AppDetails from "../Pages/AppDetails";
import InstallationLayout from "../Layout/InstallationLayout";
import Installation from "../Pages/Installation";

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
        path: "/app/:id",
        element: <AppDetailsLayout></AppDetailsLayout>,
        children: [
            {
                path: "",
                element: <AppDetails></AppDetails>
            }
        ]

    },
    {
        path: "/installation",
        element: <InstallationLayout></InstallationLayout>,
        children: [
            {
                path: "",
                element: <Installation></Installation>
            }
        ]
    }
]);


export default router;