import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayout;
