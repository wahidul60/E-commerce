import {
  createRoutesFromElements, createBrowserRouter, Route, RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import MyAccount from "./Pages/MyAccount";
import Card from "./Pages/Card";
import Checkout from "./Pages/Checkout";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Rootlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="card" element={<Card />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="notfound" element={<NotFound />} />
      </Route>
    </>
  )
);


import React from 'react'
import Rootlayout from "./Layout/Rootlayout";
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
