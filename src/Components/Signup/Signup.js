import { duration, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { useForm } from "react-hook-form";
import "./Signup.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
// import Radio from '@mui/material/Radio';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ToastContainer, toast } from 'react-toastify';
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  
  let data = useForm();
  let dispatch= useDispatch()
  let nevigate= useNavigate()
//  let [cUser,setCuser]= React.useState({})
// let [currentUser,SetcurrentUser]=useState({})
  const onSubmit = (data) => {
    // console.log(data)
    let user= {
      id:v4(),
      
      ...data,
      productCreated:[],
      numberOfProducts:0

    }
    // console.log(user);
    // SetcurrentUser(user)
    // console.log(currentUser);
    dispatch({
      type:"user",
      data:{
        user
      }
    })
    toast("SignedUp Successfully")
    
    
    if (user.kind=="buyer") {
      nevigate("/HomePage")
    }else{
      nevigate("/ShomePage")
    }
    

    
    
  
  };
  let parent={
    
    visis:{
      scale:[0,1],
    opacity:[0,1],
    },
    transition:{
      duration:1,
      // delay:1
    }
  }


  return (
   
    <div>
          <motion.div variants={parent} animate="visis" exit={{ scale:[1,0],
        opacity:[1,0]}}>
      <Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexWrap: "wrap",
            left: "13%",
            position: "absolute",
            top: "25%",
          }}
        >
          <Box
            sx={{
              paddingRight: "300px",
              color: "rgb(0, 132, 255)",
            }}
          >
            <Typography variant="h3">HS 7</Typography>
            <Typography variant="h5">We build Your dreams</Typography>
          </Box>
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
                 

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Enter Your Kind</InputLabel>
                    <Select
                      
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Enter your kind"
                      defaultValue=""
                      {...data.register("kind", { required: true })}
                      error={Boolean(data.formState.errors.kind)}
                      helpetext={
                        data.formState.errors.kind
                          ? "please enter your kind"
                          : undefined
                      }
                    >
                      <MenuItem value="seller">seller</MenuItem>
                      <MenuItem value="buyer">buyer</MenuItem>
                   
                    </Select>
                  </FormControl>
                  

                  <FormControlLabel
                    control={
                      <Radio {...data.register("tmc", { required: true })} />
                    }
                    label="Terms and Conditions"
                  />
                  <Button
                    variant="contained"
                    size="large"
                    style={{ background: "rgb(0, 132, 255)" }}
                    onClick={data.handleSubmit(onSubmit)}
                  >
                    Contained
                  </Button>
                  
                </Box>
              </form>
            </div>
          </Box>
        </Box>
      </Box>
      </motion.div>
      <ToastContainer/>
      {/* {currentUser.Name} */}
    </div>
  );
}

 {/* {data.formState.errors.Password && data.formState.errors.Password.type=="required" &&  <div className="error">please enter your Password</div>}
                  {data.formState.errors.Password && data.formState.errors.Password.type=="maxLength" &&  <div className="error">please enter at least 10 digits</div>} */}

                  {/* <input type="submit" /> */}

                  {/* <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <div>
                      <FormControlLabel
                        value="female"
                        control={<Radio {...register("gender")} />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio {...register("gender")} />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio {...register("gender")} />}
                        label="Other"
                      />
                    </div>
                  </RadioGroup>
                </FormControl> */}
                  {/* <FormControlLabel
                  control={<Switch {...register("updates")} />}
                  label="updates"
                /> */}
                      {/* {data.formState.errors.Name && data.formState.errors.Name.type=="required" &&  <div className="error">please enter your name</div>}
                  {data.formState.errors.Name && data.formState.errors.Name.type=="maxLength" &&  <div className="error">please enter at least 10 digits</div>} */}
                  {/* {Name.errors && <div>please</div>} */}
