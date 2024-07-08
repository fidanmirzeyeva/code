import React from 'react'
import { Link } from 'react-router-dom'

function HomeSect4() {
  return (
   <>
   <section className='homeSect4'>
    <div className="sect4">
        <div className="sect4_text">
            <h3>Yeni məhsullardan xəbərdar olmaq üçün</h3>
            <p>Gözəllik və dəriyə qulluq məhsullarının, zövq oxşayan ətriyyatın hər kəs üçün sevilən adresinə çevrilən</p>
            <button className='btn_sect4'><Link to={"/skincare"}>Keçid edin</Link></button>
        </div>
       
    </div>
   </section>
   </>
  )
}

export default HomeSect4