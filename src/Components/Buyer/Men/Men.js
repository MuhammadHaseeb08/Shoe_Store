import React from 'react'
import Dcard from '../Dcard/Dcard'
import Cbtn from '../Cbtn/Cbtn'
import { useSelector } from 'react-redux'

export default function Men() {
  let data=useSelector((store)=>{
    return store.cartData
  })
  console.log(data);
  return (
    <div>
  {
        data.length==0?"":<Cbtn/>
      }
<Dcard/>

    </div>
  )
}
