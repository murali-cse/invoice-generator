import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <Sidebar />
        <Outlet />
      </div>

      <div className="rightbar-overlay"></div>
    </>
  );
};

export default Layout;
