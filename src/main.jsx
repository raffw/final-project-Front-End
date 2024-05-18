import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import './App.jsx'
import { createBrowserRouter, RouterProvider }  from "react-router-dom"

import Homepages from "./pages/Homepages";
// import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ErrorPage from "./pages/404";
// import ProductsPage from './pages/products';
// import CheckoutPage from './pages/checkout';
// import DetailProductPage from './pages/product';
// import CardSpecification from './components/Fragments/CardSpecification';
// import CardSeller from './components/Fragments/CardSeller';
// import CardItem from './components/Fragments/CardItem';



const router = createBrowserRouter([
// {
//     path: "/",
//     element: <div>Hello there</div>,
//     errorElement: <ErrorPage />,
// },
{
    path: "/",
    element: <Homepages/>,
},
// {
//   path: "/login",
//   element: <LoginPage/>,
// },
{
  path: "/register",
  element: <RegisterPage/>,
}
// {
//   path: "/products",
//   element: <ProductsPage/>,
// },
// {
//   path: "/checkout",
//   element: <CheckoutPage/>,
// },
// {
//   path: "/product",
//   element: <DetailProductPage/>,
// },
// {
//   path: "/specification",
//   element: <CardSpecification/>,
// },
// {
//   path: "/item",
//   element: <CardItem/>,
// },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
