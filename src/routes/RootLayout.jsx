import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../component/MainHeader";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
