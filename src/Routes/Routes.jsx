import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeBar from "../Dual/HomeBar";
<<<<<<< HEAD
import Projects from "../pages/Projects";
=======
>>>>>>> 80f15e9 (first commit)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element:<HomeBar></HomeBar>
<<<<<<< HEAD
      },
      {
        path: "/projects",
        element:<Projects></Projects>
=======
>>>>>>> 80f15e9 (first commit)
      }
    ]
  },
]);