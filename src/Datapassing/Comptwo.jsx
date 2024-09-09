import React from 'react'
import Compthree from './Compthree'

function Comptwo(props) {
  return (
    <div className='box'>
        {props.value}
        <Compthree value={props.value} />
    </div>
  )
}

export default Comptwo