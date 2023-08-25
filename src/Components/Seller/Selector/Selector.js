import * as React from 'react';
import { duration, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./Selector.css"
import { delay, motion } from 'framer-motion';
import { margin } from '@mui/system';


const images = [
  {
    url: '/images/a.jpg',
    title: 'AdminPanal',
    width: '30%',
  },
  {
    url: '/images/b.jpg',
    title: 'CreateProduct',
    width: '30%',
  },
  {
    url: '/images/c.jpg',
    title: 'Stats',
    width: '30%',
  },
];

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration:2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function Selector() {
  return (
    
      <motion.div exit={{scale:2.5,opacity:0}} variants={container} initial="hidden" animate="visible">
        
  <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',justifyContent:'center',alignItems:'center',  rowGap:"20PX", flexDirection:"column", margin:"auto" }}  
    >
        
      {images.map((image,index) => (
         
         <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <motion.div  variants={item} whileHover={{scale:1.5}}>
          <ImageBackdrop className="MuiImageBackdrop-root" />
            <Link to={"/detail/"+image.title}><div>
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
          </div></Link>
          </motion.div>
        </ImageButton>
       
        
      ))}
      
      
    </Box>
    
    </motion.div>
    
   
   
    
  );
}