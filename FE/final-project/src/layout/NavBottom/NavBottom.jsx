import React from 'react'
import './NavBottom.scss'
import { Link } from 'react-router-dom'
function NavBottom() {
  return (
   <>
   <div className="navBottom_header">
    <div className="navBottom_list">
        <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/makeup"}>MakeUp</Link>
            <Link to={"/skincare"}>SkinCare</Link>
            <Link to={"/parfum"}>Parfum</Link>
            <Link to={"/contact"}>Contact</Link>
        </ul>
    </div>
   </div>
   </>
  )
}

export default NavBottom