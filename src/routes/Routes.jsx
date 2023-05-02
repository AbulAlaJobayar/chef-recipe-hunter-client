import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import Main from "../Component/Main";
import Login from "../Component/Login";
import Register from "../Component/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
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