import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="bg-primary text-white">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
