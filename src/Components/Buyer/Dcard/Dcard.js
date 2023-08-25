import React from 'react'
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export default function Dcard() {
    let dataCatcher= useParams()
    let path= "images"
    let [open, setOpen] = useState(false)
    let dispatch=useDispatch()

    let data1=useSelector((store)=>{
        return store.Products
           })
          //  console.log(data);  
      
           let data=data1.filter((pro)=>{
            if (pro.Category==dataCatcher.any) {
              return true
            }
           })
  return (
    <div>




 
<div style={{display:"flex", columnGap:"5rem"}} >

{data.map((data)=>{
  return(
    <div onClick={()=>setOpen(!open)}>
    <div >
    {data.file!=undefined?


  <Card sx={{ maxWidth: 350 }}>
  <CardMedia
    component="img"
    height="160"
    image= {`/${path}/${data.Category}/${data.file[0].name}`}
    alt="green iguana"
  />
  
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    {data.Name}
    </Typography>
   
    {data.discountValue? <Typography gutterBottom variant="h5" component="div">
            {data.disc}%
          </Typography>: <Typography gutterBottom variant="h5" component="div">
      Rs.{data.Price}
    </Typography>}
    {data.discountValue?<Typography gutterBottom variant="h5" component="div">
      Rs.{data.discountValue}</Typography>:""}
      <CardActions>
            <Button size="small" onClick={()=>{
              let id= data.id
              dispatch({
                type: "data",
                obj :{
                  data,
                  id
                  
                }
              })
              
              toast("Added to Cart")

            }}>Add to Cart</Button>
            {/* <Button size="small">Like</Button> */}
          </CardActions>
          <ToastContainer />
   
      
  </CardContent>
  
</Card>:"No product creTED YET"

}


</div>

</div>
  )
})}

  
    

  
  


</div>


    </div>
  )
}
