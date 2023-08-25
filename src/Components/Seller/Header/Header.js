import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  let [name,setNmae]=React.useState("")
  let data= useSelector((store)=>{
  return store.Users
  })
     React.useEffect(()=>{
      data.forEach(element => {
        let nm=element.Name
        setNmae(nm)
        
      
          });

     },[])
 
   
  
 
;
  return (
    <Box sx={{ flexGrow: 1, textAlign:"center" }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "blue" }}
          >
            {name ? <div>welcome {name} to Seller Center</div>:""}
          </Typography>
          <Stack direction="row" color="blue">
            
            <NavLink to="/"><Button color="inherit">signup</Button></NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
