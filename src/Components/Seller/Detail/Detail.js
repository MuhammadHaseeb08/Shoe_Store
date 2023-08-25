import React from 'react'
import { useParams } from 'react-router-dom'
import Signup from '../../Signup/Signup'
import Createproduct from '../Createproduct/Createproduct'
import Acard from '../Admin/Acard/Acard'
import Stats from '../Stats/Stats'
import StackedAreaChart from '../Stats/StackedAreaChart/StackedAreaChart'

export default function Detail() {
    let dta= useParams()
  
  return (
    <div>
      <div>
        <div>
         {dta.any=="AdminPanal"?<div><Acard/></div>:""}
         {dta.any=="CreateProduct"?<div><Createproduct/></div>:""}
         {dta.any=="Stats"?<div><StackedAreaChart/></div>:""}
         </div>
         </div>
    </div>

   
  )
}
