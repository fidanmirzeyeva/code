import React, { createContext } from 'react'
import UseLocalStorage from '../hooks/UseLocalStorage'
export const WishListContext = createContext();
function WishListProvider({children}) {
    const [WishList, setWishList] = UseLocalStorage("WishList",[]);
    function addWishList(item) {
        let index = WishList.findIndex((x) => x._id === item._id);
        if (index !== -1) {
         
            setWishList(WishList.filter((x) => x._id !== item._id));
        } else {
          setWishList([...WishList, {...item }]);
        }
      }
      function isExistWishList(item){
        return WishList.findIndex((x)=>x._id===item._id) !==-1
      }
      function removeWish(item) {
        setWishList(WishList.filter((x) => x._id !== item._id));
      }
  return (
    <>
       <WishListContext.Provider value={ { WishList,isExistWishList, addWishList,removeWish}}>
        {children}
       </WishListContext.Provider>
    </>
  )
}

export default WishListProvider