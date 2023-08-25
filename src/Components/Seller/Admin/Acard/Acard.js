// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box } from "@mui/system";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { useForm } from "react-hook-form";
import "./Acard.css";       
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Admin from '../Admin';

export default function Acard() {
    let nevigate=useNavigate()
    let data = useForm();
    let onSubmit=(data)=>{
if (data.Name=="Haseeb" && data.Password=="07") {
    // alert("hi")
    nevigate("/admin")
}
    }
  return (
    <div className='amain'>
        <Box
    sx={{
      width: "400px",
      height: "400px",
      // border: "2px solid blue",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow:
        "0 2px 4px rgb(0 0 0 / 20%), 0 10px 20px rgb(0 0 0 / 20%)",
      background: "white",
      // top:"20%"
      justifyContent:"center"
      
    }}
  >
    <div>
      <form>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
        >
          <TextField
            label="Enter Your Name"
            variant="outlined"
            {...data.register("Name", {
              required: true,
              
            })}
            error={Boolean(data.formState.errors.Name)}
            helperText={
              data.formState.errors.Name
                ? "please enter your Nmae"
                : undefined
            }
            
          />
          
    
          <TextField
            id="outlined-error-helper-text"
            label="Enter Your Password"
            variant="outlined"
            {...data.register("Password", {
              required: true,
              maxLength: 10,
            })}
            error={Boolean(data.formState.errors.Password)}
            helperText={
              data.formState.errors.Password
                ? "please enter your Password"
                : undefined
            }
          />
         

          
          

         
          <Button
            variant="contained"
            size="large"
            style={{ background: "rgb(0, 183, 255)" }}
            onClick={data.handleSubmit(onSubmit)}
          >
            Contained
          </Button>
          
        </Box>
      </form>
    </div>
  </Box></div>
  )
}
