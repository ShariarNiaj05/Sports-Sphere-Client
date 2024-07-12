import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About";
import AllProduct from "@/pages/AllProduct";
import Home from "@/pages/Home";
import Manage from "@/pages/Manage";
import SingleProduct from "@/pages/SingleProduct";
import SportsCategory from "@/pages/SportsCategory";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProduct />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/category/:sportsCategory",
        element: <SportsCategory />,
      },
      {
        path: "/manage",
        element: <Manage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
