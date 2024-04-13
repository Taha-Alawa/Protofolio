import { Outlet } from "react-router-dom";
import Header from "./Header";
import StarsCanvas from "./Stars";

const Layout = () => {

  return (
    <>
      <Header />
      <StarsCanvas />
      <Outlet />
    </>
  );
};

export default Layout;
