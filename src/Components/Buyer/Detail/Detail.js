import React from 'react'
import { useParams } from 'react-router-dom'
// import Men from '../Men/men'
import Men from '../Men/Men'
import Women from '../Women/Women'
import Cbtn from '../Cbtn/Cbtn'


export default function DetailB() {
    let dta=useParams()
  return (
    <div>Detail
        {dta.any=="men"?<Men/>:<Women/>}
        

    </div>
  )
}
