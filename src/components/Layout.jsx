import { Outlet } from "react-router-dom";
import Header from "./Header";
import StarsCanvas from "./Stars";
import Scroll from "./Scroll";

const Layout = () => {

  return (
    <>
      <Header />
      <StarsCanvas />
      <Outlet />
      <Scroll />
    </>
  );
};

export default Layout;
