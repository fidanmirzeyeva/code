import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Detail() {
    const {id} = useParams()
    const [detail, setdetail] = useState([])
    useEffect(() => {
    showDetail()
    }, [])
    async function showDetail() {
        const res = await fetch(`http://localhost:5000/final/${id}`)
        const data = await res.json()
        setdetail(data)
        
      }
  return (
    <>
       <HelmetProvider>
      <Helmet>
        <title>Detail Page</title> 
      </Helmet>
  </HelmetProvider>
    <div className="detail">
      <img src={detail.image} alt="" />
      <div className="detail_text">
      <h3>{detail.name}</h3>
      <h4>{detail.price} AZN</h4>
      <p>{detail.description}</p>
      <span>Almaq məsləhətdir.Gözəl qoxusu var :)</span>
      </div>
    </div>
    </>
  )
}

export default Detail