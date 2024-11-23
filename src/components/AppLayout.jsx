import React from "react";
import { Outlet } from "react-router-dom";
import CenteredAppBar from "./CenteredAppBar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <CenteredAppBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
