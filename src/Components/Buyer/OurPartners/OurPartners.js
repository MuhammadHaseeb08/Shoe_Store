import React from 'react'
import { Typography } from '@mui/material'
import { Gridi } from './Grid'
import { motion } from 'framer-motion';
export default function OurPartners() {
    let animate={
        scale:[0,1],
        opacity:[0,1]
      }
  return (
    <motion.div  whileInView={animate}>
         <div className='cath' ><Typography variant='h3' color="primary">Our Partners</Typography></div>
         <Gridi/>
    </motion.div>
  )
}
