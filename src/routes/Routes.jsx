import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../Component/Login";
import Register from "../Component/Register";
import ErrorPage from "../Component/ErrorPage";
import LoginLayout from "../Layout/LoginLayout";
import ServicesLayout from "../Layout/ServicesLayout";
import Home from "../Component/Home";
import ChefDetails from "../Component/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../Component/Blog";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element:<Navigate to='/services'></Navigate>
      },
      {
        path:'blog',
        element:<Blog></Blog>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },

{
  path:'services',
  element:<ServicesLayout></ServicesLayout>,
  children:[
    {
      path:'/services',
      element:<Home></Home>,
      loader:()=>fetch('https://assingment-10-server-abulalajobayar-gmailcom.vercel.app/services')
    },
    {
      path:':id',
      element:<PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
      loader:({params})=>fetch(`https://assingment-10-server-abulalajobayar-gmailcom.vercel.app/services/${params.id}`)
      
    }
  ],
}


]);


export default router;