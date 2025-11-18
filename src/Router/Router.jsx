import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Pages/Home/Home";
import About from "../Components/About";
import Appointment from "../Components/Appointment";
import ContactUs from "../Components/ContactUs";
import Login from "../Authentication/Login";
import Registration from "../Authentication/Registration";
import Reviews from "../Components/Reviews";
import Profile from "../Components/Profile";
import BookAppointment from "../Components/BookAppointment";
import History from "../Components/History";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/appointment',
        loader: () => fetch('/service.json'),
        element: <Appointment />
      },
      {
        path: '/reviews',
        element: <Reviews />
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
      },
      {
        path: '/service/:id',
        loader:()=>fetch('/appointment.json'),
        element: <BookAppointment />
      },
      {
        path:'/history',
        loader:()=>fetch('http://localhost:5000/users'),
        element:<History/>
      }
    ]
  }
]);
