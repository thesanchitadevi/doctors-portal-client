import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../DashBoardLayout/DashBoardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/appointment',
                    element: <Appointment></Appointment>
                },
               
            ]
        },
        {
            path: '/dashboard',
            element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
            children: [
                {
                    path: '/dashboard',
                    element: <MyAppointment></MyAppointment>
                }
            ]
        },
    ]
)

export default router;