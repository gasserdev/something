import React from "react";

import { Outlet } from "react-router";

function Layout({ children }) {
  return (
    <>
      {children}
      <Outlet />
    </>
  );
}

export default Layout;
