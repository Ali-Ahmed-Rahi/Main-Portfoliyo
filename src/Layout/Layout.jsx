import { Outlet } from "react-router-dom";
import Sidebar from "../Dual/Sidebar";
import ResponsiveSb from "../Dual/ResponsiveSb";
import ResponsiveContact from "../Dual/ResponsiveContact";

const Layout = () => {
  return (
    <div className="max-w-7xl mx-auto md:flex shadow-[0_25px_50px_rgba(0,0,0,0.5)] ">
      {/* the sidebar for lg device */}
      <div className=" bg-black md:h-screen md:fixed md:top-0 hidden md:block ">
        <Sidebar />
      </div>
      {/* the sidebar for sm device */}
      <div className="md:hidden block">
        <ResponsiveSb />
      </div>
      <div className=" bg-black md:ml-[282px] overflow-y-auto md:px-10 px-2 mb-[70px] md:mb-0 min-h-screen">
        <Outlet />
      </div>
      <div className="md:hidden block ">
        <ResponsiveContact></ResponsiveContact>
      </div>
    </div>
  );
};

export default Layout;
