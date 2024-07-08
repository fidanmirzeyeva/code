import React, { useEffect, useState } from 'react'
import './AdminPanel.scss'

import { Helmet, HelmetProvider } from 'react-helmet-async';
function AdminPanel() {
  const [admin, setadmin] = useState([])
  useEffect(() => {
    
  showAdmin()
   
  }, [])
  async function showAdmin() {
    const res = await fetch("http://localhost:5000/final")
    const data = await res.json()
    setadmin(data)
  }
  async function deleteAdmin(id) {
    const res = await fetch("http://localhost:5000/final/"+id,{method:"delete"})
    const data = await res.json()
    showAdmin()
  }
  return (
   <>
    <HelmetProvider>
      <Helmet>
        <title>Admin Page</title> 
      </Helmet>
  </HelmetProvider>
   
   <table className="admin-table">
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Description</th>
        <th>Options</th>
      </tr>
    </thead>

    <tbody>
      {admin.map((x)=>(
        <tr key={x._id}>
          <td><img src={x.image} alt="" /></td>
          <td>{x.name}</td>
          <td>{x.price}</td>
          <td>{x.category}</td>
          <td>{x.description}</td>
          <td><button onClick={()=>deleteAdmin(x._id)}>X</button></td>

        </tr>
      ))}
    </tbody>

   </table>


   </>
  )
}

export default AdminPanel