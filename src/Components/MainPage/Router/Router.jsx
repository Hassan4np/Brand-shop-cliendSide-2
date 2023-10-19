
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
import AllBrandProduct from "../Pages/AllBrandProduct";
import ProductDetails from "../Pages/ProductDetails";
import { ProductdetailsPero } from "../PrivateRepo/ProductdetailsPero";
import Update from "../Pages/Update";


  const MyBrowser = createBrowserRouter([
    {
      path: "/",
      element:<MainPage></MainPage>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
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
          loader:()=>fetch('http://localhost:5000/cards')
        },
        {
          path:'/products/:Brand',
          element:<AllBrandProduct></AllBrandProduct>,
          loader:()=>fetch('http://localhost:5000/products')
        },
        {
          path:'/product/:id',
          element:<ProductdetailsPero><ProductDetails></ProductDetails></ProductdetailsPero>,
          // loader:()=>fetch('http://localhost:5000/products')
          loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<Update></Update>,
          loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        }
        
      ]
    },
  ]);
  
  
  export {MyBrowser}