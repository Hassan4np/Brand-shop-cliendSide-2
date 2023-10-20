
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
import { UpdateRero } from "../PrivateRepo/UpdateRero";


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
          path:'/cards/:email',
          element:<MycardPepo><MyCard></MyCard></MycardPepo>,
          // loader:()=>fetch(' https://brand-shop-bankend-ceevlci3v-hassan-alis-projects-8630df6d.vercel.app/cards')
          loader:({params})=>fetch(` https://brand-shop-bankend-ceevlci3v-hassan-alis-projects-8630df6d.vercel.app/cards/${params.email}`)
        },
        {
          path:'/products/:Brand',
          element:<AllBrandProduct></AllBrandProduct>,
          loader:({params})=>fetch(`https://brand-shop-bankend-ceevlci3v-hassan-alis-projects-8630df6d.vercel.app/products/${params.Brand}`)
        },
        {
          path:'/product/Brand/:id',
          element:<ProductdetailsPero><ProductDetails></ProductDetails></ProductdetailsPero>,
          // loader:()=>fetch(' https://brand-shop-bankend-ceevlci3v-hassan-alis-projects-8630df6d.vercel.app/products')
          loader:({params})=>fetch(` https://brand-shop-bankend-ceevlci3v-hassan-alis-projects-8630df6d.vercel.app/products/Brand/${params.id}`)
        },
        {
          path:'/update/Brand/:id',
          element:<UpdateRero><Update></Update></UpdateRero>,
          loader:({params})=>fetch(` https://brand-shop-bankend-ceevlci3v-hassan-alis-projects-8630df6d.vercel.app/products/Brand/${params.id}`)
        }
        
      ]
    },
  ]);
  
  
  export {MyBrowser}