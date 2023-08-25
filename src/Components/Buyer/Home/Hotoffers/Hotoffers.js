import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
// import { Oofers } from './Oofers'
// import Cardi from '../../Card/card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Swiperi from '../../Swiper/Swiper';
import { motion } from 'framer-motion';
import Cardi from '../../Scard/card';

export default function Hotoffers() {
    
  let animate={
    scale:[0,1],
    opacity:[0,1]
  }
  return (
    <motion.div whileInView={animate}>
    <div className='cath'><Typography variant='h3' color="primary">Hot Offers</Typography></div>
    <div >
        
        <div ><Swiperi/>  </div>
        
        </div>
    </motion.div>
  )
}
