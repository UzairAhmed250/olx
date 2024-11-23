import React from "react";
import Home from "../src/pages/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/loginpage/login.jsx";
import Signup from "./components/signup/signup.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    }
    ,
    {
      path: "/signUp",
      element: <Signup />,
    }
    ,
    {
    path: "/",
    element: <Home />,
    }
  ])

  return (
    <>
     <RouterProvider router={router} />
    
    </>
  );
}

export default App;
