
import {createBrowserRouter,} from "react-router-dom";
import MainPage from "../MainPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Error from "../Pages/Error";
import AddProduct from "../Pages/AddProduct";
import MyCard from "../Pages/MyCard";
import { AddProductRepo } from "../PrivateRepo/AddProductRepo";
import { MycardPepo } from "../PrivateRepo/MycardPepo";


  const MyBrowser = createBrowserRouter([
    {
      path: "/",
      element:<MainPage></MainPage>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('./category.json'),
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
          path:'addproduct',
          element:<AddProductRepo><AddProduct></AddProduct></AddProductRepo>,
        },
        {
          path:'/mycard',
          element:<MycardPepo><MyCard></MyCard></MycardPepo>,
        }
        
      ]
    },
  ]);
  
  
  export {MyBrowser}