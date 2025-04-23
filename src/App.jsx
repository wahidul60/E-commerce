import {
  createRoutesFromElements,createBrowserRouter,Route,RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}></Route>    
  )
);


import React from 'react'
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
