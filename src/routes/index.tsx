import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About";
import AllProduct from "@/pages/AllProduct";
import Home from "@/pages/Home";
import Manage from "@/pages/Manage";
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
