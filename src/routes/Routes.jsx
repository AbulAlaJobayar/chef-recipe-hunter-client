import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import Main from "../Component/Main";
import Login from "../Component/Login";
import Register from "../Component/Register";
import ErrorPage from "../Component/ErrorPage";
import ChefDetails from "../Component/ChefDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
       {
        path:'/:id',
        element:<ChefDetails></ChefDetails>

       },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        }
      ]
    },
  ]);


export default router;