import React from 'react'
import Compfour from './Compfour'

function Compthree(props) {
  return (
    <div className='box'>
        Compthree
        {props.value}
        <Compfour value={props.value}/>
    </div>
  )
}

export default Compthree