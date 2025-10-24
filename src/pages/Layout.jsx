import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <>{children}</>
      <Outlet />
    </>
  );
}

export default Layout;
