import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import "./card.css"
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from 'react-router-dom';

export default function Cardi(props) {
let dispatch= useDispatch()
// let dataCatcher= useParams()
  let path = "images"
  // `${url}/${event.target.value}
 


  return (
    <div>
   
    <div className='adCont' >
    
        
         
          
          <div className="heading"  >
            {props.product.file!=undefined?
          <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            component="img"
            height="160"
            image= {`/${path}/${props.product.Category}/${props.product.file[0].name}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.product.Name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Rs.{props.product.Price}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
               Color: {props.product.Color}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Size: {props.product.Size}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              discount: {props.product.disc}% 
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              discountedValue: {props.product.discountValue}
            </Typography>
          </CardContent>
          
        </Card>:""
      }
        </div>
        
        
   
  
    </div>
    </div>
  );
}