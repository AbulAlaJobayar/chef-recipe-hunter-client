import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../Component/Login";
import Register from "../Component/Register";
import ErrorPage from "../Component/ErrorPage";
import LoginLayout from "../Layout/LoginLayout";
import ServicesLayout from "../Layout/ServicesLayout";
import Home from "../Component/Home";
import ChefDetails from "../Component/ChefDetails";
import PrivateRoutes from "./PrivateRoutes";

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
      loader:()=>fetch('http://localhost:5000/services')
    },
    {
      path:':id',
      element:<PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
      loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      
    }
  ],
}


]);


export default router;