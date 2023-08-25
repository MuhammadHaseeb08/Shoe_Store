import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import "./table.css";
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";

export default function Tablec() {
  let dispatch = useDispatch();
  let [total, settotal] = React.useState(0);
  let [reFetch, setReFetch] = React.useState(0);
  let data = useSelector((store) => {
    return store.cartData;
  });
  
    // let tr=0
    // data.forEach(di => {
    //    tr+=di.total
    //    settotal(tr)
    //    if (data.length==0) {
    //     settotal(0)
    //    }
    // });
  
 React.useEffect(()=>{
  let tr=0
    data.forEach(di => {
       tr+=di.total
       settotal(tr)
       console.log(di.Quantity)
       if (data.length==undefined) {
        settotal(0)
        console.log("Done2")
       }
    });
 },[reFetch])

 

  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Selected</TableCell>
            <TableCell align="right">Name </TableCell>
            <TableCell align="right">Price</TableCell>
            {/* <TableCell align="right">Size</TableCell> */}
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Buy now</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="productimg">
                  {" "}
                  <img
                    src={`/images/${row.Category}/${row.file[0].name}`}
                    alt=""
                    width="100%"
                  />{" "}
                </div>
              </TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.discountValue?row.Price=row.discountValue:row.Price}</TableCell>
             
              <TableCell align="right">
                <div className="adj">
                  {" "}
                  <button
                    onClick={(evt) => {
                      let nqty = row.Quantity-1;
                      if (row.Quantity==0 && nqty<0) {
                        nqty=0
                      }
                      let id = row.id;
                      setReFetch(nqty)
                      
                      dispatch({
                        type: "qtyupdate",
                        data: {
                          nqty,
                          id,
                        },
                      });
                    }
                  }
                  >
                    -
                  </button>{" "}
                  {row.Quantity}{" "}
                  <button
                    onClick={() => {
                      let nqty = row.Quantity+1;
                      // console.log(row.Quantity)
                      let id = row.id;
                      setReFetch(nqty)
                      dispatch({
                        type: "qtyupdate",
                        data: {
                          nqty,
                          id,
                        },
                      });
                    }}
                  >
                    +
                  </button>
                </div>
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right"><Stack spacing={3} direction="row">
              <Button variant="outlined" onClick={()=>{

                    settotal(total-row.Price*row.Quantity)
                    // settotal(tr)
                    let id = row.id;
                    let Quantity=row.Quantity
                    row.Quantity=1
                    
                dispatch({
                  type:"delete",
                  data:{
                    index,
                    row
                  }
                })
              }
               
              }
              >delete</Button>
   </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <div className="total"><h2>Your Bill</h2><h3>{total}</h3></div>
      </div>
 
  );
}
