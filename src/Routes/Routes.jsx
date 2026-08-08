import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeBar from "../Dual/HomeBar";

import Projects from "../pages/Projects";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element:<HomeBar></HomeBar>
      },
      {
        path: "/projects",
        element:<Projects></Projects>

      }
    ]
  },
]);