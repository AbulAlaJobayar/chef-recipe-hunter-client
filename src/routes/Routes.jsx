import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import Main from "../Component/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
      ]
    },
  ]);


export default router;