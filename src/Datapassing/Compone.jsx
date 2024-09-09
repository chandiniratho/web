import React, { useState } from 'react'
import Comptwo from './Comptwo'

function Compone() {

    const userdata = {
        userName : "haresh",
        id:1234,
        City : "Visakhapatnam"
    }

  return (
    <div className='box'>
        Compone
        
        <Comptwo value={"userdata.userName"}/>
        
    </div>
    
  )
}

export default Compone