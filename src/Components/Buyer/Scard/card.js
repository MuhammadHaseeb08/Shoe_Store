import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
// import "./card.css"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./card.css"
import { motion } from 'framer-motion';


// import required modules
import { Navigation } from "swiper";



export default function Cardi(props) {
let dispatch= useDispatch()
// let dataCatcher= useParams()
  let path = "images"
 
  // `${url}/${event.target.value}

  let data1=useSelector((store)=>{
  return store.Products
     })
    //  console.log(data);  

     let data=data1.filter((pro)=>{
      if (pro.disc) {
        return true
      }
     })
 


  return (
    <div>
   
   <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      
    <div >

      {data.map((data)=>{
        return(
          <div  >
          {data.file!=undefined?

<SwiperSlide>
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
          <Typography gutterBottom variant="h5" component="div">
           <strike> Rs.{data.Price}</strike>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Rs.{data.discountValue}
          </Typography>
            
        </CardContent>
        
      </Card></SwiperSlide>:""
      
      }
      </div>
        )
      })}
    
        
         
          
 
        
        
   
  
    </div>
    </Swiper>
    </div>
  );
}


  {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
       
        <SwiperSlide><Cardi/></SwiperSlide>
      </Swiper> */}




