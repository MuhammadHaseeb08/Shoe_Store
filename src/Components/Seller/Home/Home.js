import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Selector from '../Selector/Selector'
import Footer from '../../Footer/Footer'

export default function Shome() {
  return (
    <div> 

<Header/>
<Selector/>
    {/* <Link to={"/detail/home"}>
    <div>
      home
    </div>
    </Link>
    <Link to={"/detail/main"}>
    <div>
      main
    </div>
    </Link>
    <Link to={"/detail/user"}>
    <div>
      user
    </div>
    </Link> */}
    <Footer/>
    
    </div>
    
  )
}
