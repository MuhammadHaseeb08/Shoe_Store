import logo from './logo.svg';
import './App.css';
import Header from "./Components/Seller/Header/Header"
import Signup from "./Components/Signup/Signup"
import Home from './Components/Buyer/Home/Home';
import Shome from './Components/Seller/Home/Home';
import Detail from './Components/Seller/Detail/Detail';
import Createproduct from './Components/Seller/Createproduct/Createproduct';
import Admin from './Components/Seller/Admin/Admin';
import React from 'react';

import { Routes,Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import DetailB from './Components/Buyer/Detail/Detail';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Buyer/Cart/cart';

function App() {
  let location= useLocation()
  // let [product, setProduct] = React.useState({});
  // let [currentUser,SetcurrentUser]=React.useState({})
  
  return (
    <div className="App" >
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Signup ></Signup>}></Route>
        <Route path='/HomePage' element={<Home></Home>}></Route> 
        <Route path='/ShomePage' element={<Shome></Shome>}></Route> 
        <Route path='/detail/:any' element={<Detail ></Detail>}></Route>
        <Route path='/detailB/:any' element={<DetailB ></DetailB>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route> 
        <Route element={<Createproduct ></Createproduct>}></Route> 
        <Route path='/cart' element={<Cart ></Cart>}></Route>  

      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
