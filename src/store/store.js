import { useState } from "react";
import { combineReducers, createStore } from "redux";
let init = [];

function Users(oldData = init, newData) {
  switch (true) {
    case newData.type == "user":
      oldData.push(newData.data.user);

      break;
    case newData.type == "userPoduct":
      oldData.forEach((user) => {
        if (user.id == newData.data.currentUser.id) {
          user.productCreated.push(newData.data.productP);
          user.productCreated.forEach((element, index) => {
            let ch = index + 1;
            // console.log(ch);
            user.numberOfProducts = ch;
            // console.log(user.numberOfProducts);
          });
        }
      });
      // console.log(oldData);

      break;

    default:
      break;
  }

  return [...oldData];
}

function Products(oldData = init, newData) {
  switch (true) {
    case newData.type == "product":
      oldData.push(newData.data.product);
      // console.log(oldData);
      oldData.forEach((element) => {
        // element.Quantity=1
        // element.total = +element.Quantity * +element.Price;
        if (element.disc) {
          let dex = (element.Price * element.disc) / 100;
          element.discountValue = element.Price - dex;
          // element.Price=element.discountValue
        }
      });

      break;

    default:
      break;
  }

  return [...oldData];
}

function cartData(oldData = [], newData) {
  switch (true) {
    case newData.type == "data":
      // oldData.forEach((element)=>{
      //   if (element.disc  ) {
      //     element.Price=element.discountValue
      //   }

      // })
      if (oldData.includes(newData.obj.data, 0)) {
        newData.obj.data.Quantity++;
        // oldData.forEach((element)=>{
        //   // if (element.discountValue) {
        //   //   element.Price=element.discountValue
        //   // }
        //   element.total = element.Quantity * element.Price;
        // })
        oldData.forEach((ele)=>{
          if (ele.disc) {
            newData.obj.data.total =
          newData.obj.data.Quantity * newData.obj.data.discountValue;
          }else{

            newData.obj.data.total =
              newData.obj.data.Quantity * newData.obj.data.Price;
          }
        })

      } else {
        oldData.push(newData.obj.data);
        console.log(oldData,"cart");
        // oldData.forEach((data) => {

        //     // data.Quantity=1

        //   // data.Quantity=1
        //     data.total = data.Quantity * data.Price;

        //   // console.log(data.qty);
        // });

        oldData.forEach((ele)=>{
          if (ele.disc) {
            newData.obj.data.total =
          newData.obj.data.Quantity * newData.obj.data.discountValue;
          }else{

            newData.obj.data.total =
              newData.obj.data.Quantity * newData.obj.data.Price;
          }
        })
      }

      //  oldData.push(newData.obj.data);

      break;

    case newData.type == "qtyupdate":
      oldData.forEach((data) => {
        if (data.id == newData.data.id) {
          // data.Quantity=1
          data.Quantity = newData.data.nqty;
          console.log(data.Quantity);
          data.total = data.Quantity * data.Price;
        }
        // console.log(data.qty);
      });
      break;
    case newData.type == "delete":
      oldData.splice(newData.data.index, 1);
      console.log(oldData)

    // newData.data.Quantity=0

    default:
      break;
  }
  return [...oldData];
}

let compData = combineReducers({ Users, Products, cartData });
let meraStore = createStore(compData);
export default meraStore;
