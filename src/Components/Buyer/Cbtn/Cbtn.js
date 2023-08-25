import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Cbtn.css"
import Fab from '@mui/material/Fab';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Cbtn() {
  let nevigate=useNavigate()
 
  return (
    <div>
      
        <div className='cartbtn'>
        <Fab color='primary' onClick={()=>nevigate("/cart")}>
            <ShoppingCartIcon/>
        </Fab>

    </div>
      
        
    </div>
  )
}
