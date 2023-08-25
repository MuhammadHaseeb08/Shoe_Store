import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import "./Createproduct.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import Cardi from "./Card/card";
import { toast,ToastContainer } from "react-toastify";


export default function Createproduct(props) {
  let data = useForm();
  let dispatch = useDispatch();
  let users= useSelector((store)=>{
    return store.Users
  })
  // console.log(users);
 
  // let path = "images"
let [product,setProduct]=React.useState({
//  file:[{name: 'img5.jpg'}]


})
let [currentUser,SetcurrentUser]=React.useState({})
React.useEffect(()=>{users.forEach(element => {
  SetcurrentUser(element)
});
;},[currentUser])
// console.log(currentUser)


  let onSubmit = (data) => {
    let product = {
      id: v4(),
      ...data,
      discount:false,
      discountValue:0,
      total:0,
      Quantity:1
    };
    setProduct(product);
    dispatch({
      type: "product",
      data: {
        
        product,
      },
    });
    toast("product listed successfully")
dispatch({
      type: "userPoduct",
      data: {
        product,
        currentUser,
      },
    });
  };
  return (
    <div className="mainc">
      <div className="heading">
        <Typography variant="h2" color="rgb(0, 132, 255)">
          Create Your Product
        </Typography>
      </div>
      <div className="form">
        <form>
          <Box
           
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="fields">
              <TextField
                id="filled-basic"
                label="Enter Product Name"
                variant="filled"
                {...data.register("Name", { required: true, maxLength:10 })}
                // error={Boolean(data.formState.errors.Name)}
              //  helperText=
              />
              <TextField
                id="filled-basic"
                label="Enter Product Price"
                variant="filled"
                type="number"
                {...data.register("Price", { required: true })}
                // error={Boolean(data.formState.errors.Price)}
              />
              <TextField
                id="filled-basic"
                label="Enter Product Category"
                variant="filled"
                {...data.register("Category", { required: true })}
                // error={Boolean(data.formState.errors.Category)}
              />
            </div>
            <hr />
            <div className="fields">
              <TextField
                id="filled-basic"
                label="Enter Product Size"
                variant="filled"
                type="number"
                {...data.register("Size", { required: true })}
                // error={Boolean(data.formState.errors.Size)}
              />
              <TextField
                id="filled-basic"
                label="Enter Product Color"
                variant="filled"
                {...data.register("Color", { required: true })}
               
                // error={Boolean(data.formState.errors.Color)}
              />
             <TextField
                id="filled-basic"
                label="Enter Product Discount %"
                variant="filled"
                
                type="number"
                {...data.register("disc")}
                // error={Boolean(data.formState.errors.Quantity)}
              />
            </div>
            
            <hr />
            <div className="disc">  </div>
            <div className="heading">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  {...data.register("file", { required: true })}
                  // error={Boolean(data.formState.errors.file)}
                />
                <PhotoCamera />
              </IconButton>
            </div>

            <div className="heading">
              <Button variant="outlined" onClick={data.handleSubmit(onSubmit)}>
                Contained
              </Button>
            </div>
          </Box>
        </form>
        <div>
          
          
        </div>
      </div>
      {/* `/${path}/${product.Category}/${product.file[0].name} */}
          {/* <div>{product.Name}</div> */}
          {/* <img src={`/${path}/${product.Category}/${product.file.name}`} /> */}
          {/* <img width="20%" src={`/images/${product.Category}/${product.file[0].name}`} /> */}
          {/* {product.file!=undefined? <img width="20%" src={`/images/${product.Category}/${product.file[0].name}`} />:""} */}

          {product.file!=undefined?   <div className="heading">
        <Typography variant="h2" color="rgb(0, 132, 255)">
          Your Product
        </Typography>
        <Cardi product={product} setProduct={setProduct}/>
      </div>:""}
      <ToastContainer/>
       
         
   
    </div>
  );
}


// if (user.kind=="seller") {
//   let found= users.forEach(element => {
//     if (element.id==props.currentUser.id) {
      
//     }
//   });
// }
