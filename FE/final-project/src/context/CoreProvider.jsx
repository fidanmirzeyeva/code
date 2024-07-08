import React from 'react'
import MainProvider from './MainProvider'
import WishListProvider from './WishListProvider'
import AuthProvider from './AuthProvider'

function CoreProvider({children}) {
  return (
    <>
    <AuthProvider>
    <MainProvider>
            <WishListProvider>
                {children}
            </WishListProvider>
    </MainProvider>
    </AuthProvider>
    </>
  )
}

export default CoreProvider