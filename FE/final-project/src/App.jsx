import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home'
import MakeUp from './pages/MakeUp/MakeUp';
import SkinCare from './pages/SkinCare/SkinCare';
import Basket from './pages/Basket/Basket';
import WishList from './pages/WishList/WishList';


import Add from './pages/Add/Add';
import AdminPanel from './pages/Adminpanel/AdminPanel';
import Detail from './pages/Detail/Detail';
import Parfum from './pages/Parfum/Parfum';
import Contact from './pages/Contact/Contact';
import MainProvider from './context/MainProvider';
import CoreProvider from './context/CoreProvider';
import Register from './pages/Register/Register';
import LogIn from './pages/LogIn/LogIn';
import PrivateRoute from './routes/PrivateRoute';

function App() {
 

  return (
    <>
     
     
     <CoreProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/makeup' element={<MakeUp/>}/>
          <Route path='/skincare' element={<SkinCare/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/wishList' element={<WishList/>}/>
         <Route element={<PrivateRoute role={["admin"]}/>}>
         <Route path='/add' element={<Add/>}/>
     <Route path='/admin' element={<AdminPanel/>}/>
         </Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/parfum' element={<Parfum/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
     </CoreProvider>

     
     
    </>
  )
}

export default App
