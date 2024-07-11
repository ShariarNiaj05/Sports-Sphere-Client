import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" max-w-7xl mx-auto flex justify-between py-5 font-bold">
      {/* logo div  */}
      <div>
        {" "}
        <Link to={"/"}>Sports Sphere</Link>
      </div>

      {/* pages div  */}
      <div>
        <Menubar>
          <MenubarMenu>
            <div className=" flex gap-5">
              <Link to={"/products"}>
                <MenubarTrigger>All Product</MenubarTrigger>
              </Link>
              <Link to={"/manage"}>
                <MenubarTrigger>Manage</MenubarTrigger>
              </Link>
              <Link to={"/about"}>
                <MenubarTrigger>About</MenubarTrigger>
              </Link>
            </div>
            {/* <MenubarContent>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent> */}
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Cart icon  */}

      <div>cart</div>
    </div>
  );
};

export default Navbar;
