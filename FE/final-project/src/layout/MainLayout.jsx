import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavLayout from "./NavLayout/NavLayout";

function MainLayout() {
  return (
    <>
      <NavLayout></NavLayout>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
