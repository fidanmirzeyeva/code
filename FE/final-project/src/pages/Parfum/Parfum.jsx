import React, { useContext, useEffect, useState } from 'react'
import './Parfum.scss'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'
import { WishListContext } from '../../context/WishListProvider'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Parfum() {
const [parfum, setparfum] = useState([])
const [parfumSearch, setparfumSearch] = useState('')
const { WishList,isExistWishList, addWishList }=useContext(WishListContext)
const { basket,isExistBasket,getCountFromBasket, addbasket,GetTotal, decreasebasket,removebasket }=useContext(MainContext)

useEffect(() => {
    showParfums()
}, [])




    async function showParfums() {
        const res = await fetch("http://localhost:5000/categories/parfum")
        const data = await res.json()
        setparfum(data)
      }

      function sortPrice() {
        setparfum([...parfum.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
        
      }
      function sortPrice2() {
        setparfum([...parfum.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0))])
        
      }
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Parfum Page</title> 
      </Helmet>
  </HelmetProvider>
    <div className="parfum_sect">
    <div className="parfum_text">
    <div className="basliq">
          <h2>Qadın parfümləri</h2>
          <div className="input">    <input type="text" placeholder='Search...' value={parfumSearch} onChange={((e)=>setparfumSearch(e.target.value))} /></div>
          <div className="button"><button onClick={()=>sortPrice()}>Ucuzdan-Bahaya</button>
     <button onClick={()=>sortPrice2()}>Bahadan-Ucuza</button>
      
     </div>
          </div>
         
        </div>
        </div>
       
  

    <div className="parfum_cards">
    
      {
      parfum.filter(x => x.name.toLowerCase().includes(parfumSearch.toLocaleLowerCase() ))
    
      .map((x)=>(
        <div className="parfum_card_text" key={x._id}>
          
            <img src={x.image} alt="" className='image1'/>
            <img src={x.image2} alt="" className='image2'/>
           <div className="text_card">
           <h3>{x.name}</h3>
         <p>{x.description}</p>
           
            <h4>{x.price}  AZN </h4>
           </div>
            <div className="btn"><button  onClick={()=>addbasket(x)}>Add Basket</button>
            <button><Link to={`/detail/${x._id}`}>Detail</Link></button>
            <button onClick={()=>addWishList(x)} ><i className="fa-regular fa-heart"></i></button>
           
            </div>

         

        </div>
      ))}
    </div>

    </>
  )
}

export default Parfum