import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../DashBoardLayout/DashBoardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/Dashboard/AllUsers/AllUsers";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path: '/',
            errorElement:<ErrorPage></ErrorPage>,
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
            errorElement:<DisplayError></DisplayError>,
            element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
            children: [
                {
                    path: '/dashboard',
                    element: <MyAppointment></MyAppointment>
                },
                {
                    path: '/dashboard/allusers',
                    element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
                },
                {
                    path: '/dashboard/adddoctor',
                    element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
                },
                {
                    path: '/dashboard/managedoctors',
                    element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
                },
                {
                    path: '/dashboard/payment/:id',
                    element: <Payment></Payment>,
                    loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
                },
            ]
        },
    ]
)

export default router;