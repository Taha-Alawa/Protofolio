import { Outlet } from "react-router-dom";
import Header from "./Header";
import StarsCanvas from "./Stars";
import Scroll from "./Scroll";
import Footer from "./Footer";

const Layout = () => {

  return (
    <>
      <Header />
      <StarsCanvas />
      <Outlet />
      <Footer />
      <Scroll />
    </>
  );
};

export default Layout;
