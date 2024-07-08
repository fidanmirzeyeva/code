import React from "react";
import "./Footer.scss";
import img from '../../img/Screenshot 2024-06-14 011607.png'
function Footer() {
  return (
    <>
      <footer>
        <div className="footerr">
          <div className="footer_text">
            <h3>Bizi izləyin </h3>
            <p>
              <i className="fa-brands fa-instagram foot-logo"></i>
              <i className="fa-brands fa-twitter foot-logo"></i>
              <i className="fa-brands fa-tiktok foot-logo" ></i>
            </p>
            <h4>Dəstək üçün:</h4>
            <h4>info@fmbeauty.az</h4>
          </div>


       <div className="foot_logo">
        <img src={img} alt="" />
       </div>


          <div className="footer_text">
            <h3>Faydalı bağlantılar </h3>
            <h4>Faydalı məlumatlar</h4>
            <h4>Mağazalar</h4>
            <h4>Partnyorlar</h4>
          </div>

          
        </div>
      </footer>
    </>
  );
}

export default Footer;
