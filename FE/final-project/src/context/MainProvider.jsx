import React, { createContext } from 'react'
import UseLocalStorage from '../hooks/UseLocalStorage';

export const MainContext = createContext()



function MainProvider({children}) {
const [basket, setbasket] = UseLocalStorage("Value",[]);
function addbasket(item) {
    
    let index = basket.findIndex((x) => x._id === item._id);
    if (index !== -1) {
      basket[index].count++;
      setbasket([...basket]);
    } else {
      setbasket([...basket, {...item, count:1 }]);
    }
  }
  function decreasebasket(item) {
    let index = basket.findIndex((x) => x._id === item._id);
    let element=basket[index]
    if (element.count>1) {
      basket[index].count--
      setbasket([...basket]);
   
  }
}
  function removebasket(item) {
    setbasket(basket.filter((x) => x._id !== item._id));
  }
  function isExistBasket(item){
    return basket.findIndex((x)=>x._id===item._id) !==-1
  }
  function GetTotal(){
   return basket.reduce((prev,initial)=>prev+(initial.price*initial.count),0).toFixed(2)
  }
  function getCountFromBasket(item){
    return basket.find((x)=>x._id===item._id).count
  }

  return (
   <>
   <MainContext.Provider value={{basket,getCountFromBasket,isExistBasket, addbasket,GetTotal, decreasebasket,removebasket}}>
    {children}
   </MainContext.Provider>
   </>
  )
}

export default MainProvider