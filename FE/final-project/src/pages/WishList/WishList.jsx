import React, { useContext } from 'react'
import '../Basket/Basket.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { WishListContext } from '../../context/WishListProvider'
import { MainContext } from '../../context/MainProvider'


function WishList() {
  const { WishList,isExistWishList, removeWish,addWishList }=useContext(WishListContext)
  
  
  return (

    <div className='basket_sect'>
       <HelmetProvider>
      <Helmet>
        <title>WishList Page</title> 
      </Helmet>
  </HelmetProvider>
    <div className='baskets'>
      {WishList.map((x)=>(
          <div key={x.id} className='basket'>
          <img src={x.image} alt="" />
          <div className="basket_text">
          <h3>{x.name}</h3>
          <h4>{x.description}</h4>
          <h3>{x.price} AZN</h3>
          </div>
          
          <div className="basket_btn">
          <div className="btn_count">
          <button onClick={()=>removeWish(x)} className='remove'><i className="fa-solid fa-trash"></i></button>

          </div>
          </div>
          </div>
          
      ))}
       
    </div>
    
  </div>
  )
}

export default WishList