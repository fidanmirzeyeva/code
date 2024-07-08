import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'
 import './Basket.scss'
 import { Helmet, HelmetProvider } from 'react-helmet-async';
function Basket() {
  const { basket, addbasket, GetTotal,decreasebasket,removebasket }=useContext(MainContext)
  return (
    <div className='basket_sect'>
      <HelmetProvider>
      <Helmet>
        <title>Basket Page</title> 
      </Helmet>
  </HelmetProvider>
      <div className='baskets'>
        {basket.map((x)=>(
            <div key={x.id} className='basket'>
            <img src={x.image} alt="" />
            <div className="basket_text">
            <h3>{x.name}</h3>
            <h4>{x.description}</h4>
            <h3>{x.price} AZN</h3>
            </div>
            
            <div className="basket_btn">
            <div className="btn_count">
            <button onClick={()=>addbasket(x)}><i className="fa-solid fa-plus"></i></button> <p>{x.count}</p>
            <button onClick={()=>decreasebasket(x)}><i className="fa-solid fa-minus"></i></button>
            <button onClick={()=>removebasket(x)} className='remove'><i className="fa-solid fa-trash"></i></button>

            </div>
            </div>
            </div>
            
        ))}
         
      </div>
      <div className="total">
      <h3>Cəmi: {GetTotal()} AZN</h3>
      <button>Sifarişinizi tamamlayın</button>
      </div>
    </div>
  )
}

export default Basket