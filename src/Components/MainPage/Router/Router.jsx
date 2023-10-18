
import {createBrowserRouter,} from "react-router-dom";
import MainPage from "../MainPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";


  const MyBrowser = createBrowserRouter([
    {
      path: "/",
      element:<MainPage></MainPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        
      ]
    },
  ]);
  
  
  export {MyBrowser}