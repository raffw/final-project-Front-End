import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import './App.jsx'
import { createBrowserRouter, RouterProvider }  from "react-router-dom"

import Homepages from "./pages/Homepages";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";
import ProductsPage from './pages/products';
import CheckoutPage from './pages/checkout';
import DetailProductPage from './pages/product';



const router = createBrowserRouter([

{
    path: "/",
    element: <Homepages/>,
},
{
  path: "/404",
  element: <ErrorPage/>,
},
{
  path: "/login",
  element: <LoginPage/>,
},
{
  path: "/register",
  element: <RegisterPage/>,
},
{
  path: "/products",
  element: <ProductsPage/>,
},
{
  path: "/checkout",
  element: <CheckoutPage/>,
},
{
  path: "/product",
  element: <DetailProductPage/>,
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
