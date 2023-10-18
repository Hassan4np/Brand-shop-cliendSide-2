
import {createBrowserRouter,} from "react-router-dom";
import MainPage from "../MainPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Error from "../Pages/Error";
import AddProduct from "../Pages/AddProduct";
import MyCard from "../Pages/MyCard";


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
          element:<AddProduct></AddProduct>
        },
        {
          path:'/mycard',
          element:<MyCard></MyCard>
        }
        
      ]
    },
  ]);
  
  
  export {MyBrowser}