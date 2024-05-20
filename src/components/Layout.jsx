import { Outlet } from "react-router-dom";
import Header from "./Header";
import Scroll from "./Scroll";
import Footer from "./Footer";

const Layout = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Scroll />
    </>
  );
};

export default Layout;
