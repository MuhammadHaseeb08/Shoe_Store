import React from 'react'
import { Typography } from '@mui/material'
import "./Category.css"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


export default function Category() {
  let animate={
    scale:[0,1],
    opacity:[0,1]
  }
   let child={
    scale:[1,1.25],
    boxShadow:[1,3],
    cursor:"pointer"
  }
  let tap={
    scale:[1,0.75],
  }
  return (
    <div>
      <motion.div whileInView={animate}>
        <div className='cath'><Typography variant='h3' color="primary">Categories</Typography></div>
        <div className='blocks'>
           <Link to={"/detailB/men"}><motion.div whileHover={child} whileTap={tap}  className='block' id='men'><img src='/images/real.png' width="100%"/></motion.div></Link>
           <Link to={"/detailB/women"}><motion.div  whileHover={child}className='block' id='women' whileTap={tap}><img src='/images/Highheel.png' width="100%"/></motion.div></Link>
        </div>
      </motion.div>
    </div>
  )
}
