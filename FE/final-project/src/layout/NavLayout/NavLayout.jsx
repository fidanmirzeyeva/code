import React from "react";
import NavBottom from "../NavBottom/NavBottom";
import NavTop from "../NavTop/NavTop";
import './NavLayout.scss'
import '../NavBottom/NavBottom.scss'
import '../NavTop/NavTop.scss'


function NavLayout() {
  return (
    <>
     <div className="navbarr">
     <NavTop></NavTop>
     <NavBottom></NavBottom>
     </div>
    </>
  );
}

export default NavLayout;
