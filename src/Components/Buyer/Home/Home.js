import React from 'react'
// import Header from "../Components/Seller/Header/Header.js"
import Header from '../Header/Header'
import SwipeableTextMobileStepper from '../Slider/Slider'
import Category from '../Category/Category'
import Hotoffers from './Hotoffers/Hotoffers'
import OurPartners from '../OurPartners/OurPartners'
import Footer from '../../Footer/Footer'
import Cbtn from '../Cbtn/Cbtn'
import { useSelector } from 'react-redux'

export default function Home() {
  let data=useSelector((store)=>{
    return store.cartData
  })
  // console.log(data);
  return (
    <div>
      <Header/>
      <SwipeableTextMobileStepper/>
      <Category/>
      <Hotoffers/>
      <OurPartners/>
      {
        data.length==0?"":<Cbtn/>
      }
      
      <Footer/>
      
      

    </div>
  )
}
