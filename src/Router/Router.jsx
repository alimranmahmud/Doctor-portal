import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import About from "../Components/About";
import Appointment from "../Components/Appointment";
import Review from "../Pages/Home/Review";
import ContactUs from "../Components/ContactUs";
import Login from "../Authentication/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayOut,
        children: [
            {
                index: true,
                element:<Home></Home>
            },
            {
                path:'/about',
                Component: About
            },
            {
                path:'/appointment',
                Component:Appointment
            },
            {
                path:'/reviews',
                Component: Review
            },
            {
                path:'/contactUs',
                Component:ContactUs
            },
            {
                path:'/login',
                Component:Login
            }

        ]
    }
])