import React, { useEffect, useState } from 'react'

function UseLocalStorage(value,initial) {
    const [local, setlocal] = useState(localStorage.getItem(value)?JSON.parse(localStorage.getItem(value)):initial)
    useEffect(() => {
        localStorage.setItem(value,JSON.stringify(local))
    
      
    }, [value,initial])
  return [local,setlocal]
}

export default UseLocalStorage