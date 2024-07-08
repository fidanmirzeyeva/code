import React, { useContext } from 'react'
import img from '../../img/Screenshot 2024-06-14 011607.png'
import './NavTop.scss'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'
import { WishListContext } from '../../context/WishListProvider'
import { AuthContext } from '../../context/AuthProvider'
function NavTop() {
  const {basket} = useContext(MainContext)
  const {WishList} = useContext(WishListContext)

  const {token,decoded,logOut} = useContext(AuthContext)
  console.log(token)
  console.log(decoded)
  return (
   <>
   <div className="navtop_header">
   <div className="navtop_contact">
   <div className="call"><i className="fa-solid fa-phone"></i>
   <p>+994 51 578 13 13</p></div>
  {/* <div className="insta">
  <h3><i className="fa-brands fa-instagram"></i></h3>
  <Link to={"https://www.instagram.com/mrz.va_/?utm_source=ig_web_button_share_sheet"}><p>mrz.va_</p></Link>
  </div> */}
   </div>
   <div className="navtop_logo">
    <div className="logo_navtop">
    <img src={img}   alt="" />   </div>
    </div>
   <div className="navtop_link">
    <ul>

    {token? <Link to={"/basket"}><i className="fa-solid fa-basket-shopping"></i>{basket.length}</Link>:null}
    {token? <Link to={"/wishList"}><i className="fa-solid fa-heart"></i>{WishList.length}</Link>:null}
    {decoded && decoded.role==="admin"?  <Link to={"/admin"}>Admin</Link>:null}
    {decoded && decoded.role ==="admin"? <Link to={"/add"}>Add</Link>:null}

    

        {token ? (
          <>
            <li>
              {/* <Link to={"/profile"} className="wishlist">
                ProfilePage
              </Link> */}
            </li>
            <li className="log_out_container">
              <div >{decoded.email} <button onClick={logOut} className='logOut'>
                <i className="fa-solid fa-right-from-bracket"></i>Log Out
              </button></div>
              
            </li>
          </>
        ) : (
          <>
            <Link to={"/register"} className="giris">
              <i className="fa-solid fa-user"></i> Register
            </Link>
            <Link to={"/login"} className="giris">
              <i className="fa-solid fa-user"></i> Log In
            </Link>
          </>
        )}
    </ul>
   
   </div>
   </div>


   </>
  )
}

export default NavTop