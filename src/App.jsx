import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Heropage } from "./components/Heropage";
import { Todolist } from "./components/todolist";
import {Calculator} from "./components/Calculator";
import "./style.css"
import { Homepage } from "./components/Homepage";
const router = createBrowserRouter([
  {
    path:  "/",
    element:<Navbar/>,
  },
  {
    path:  "hero",
    element: <Heropage/>
  },
  {
    path:  "todolist",
    element: <Todolist/>
  },
  {
    path:  "calculator",
    element: <Calculator/>
  },
  {
    path:  "homepage",
    element: <Homepage/>
  },

  {
    path:  "*",
    element: <div>404 Not Found</div>,
  }
]);
export const App = () => {
  
  return <RouterProvider router={router} />;
};