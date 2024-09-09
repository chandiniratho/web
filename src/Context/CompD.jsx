import React from 'react'
import {userContaxt} from './CompA'

function CompD() {
  return (
    <div className='box'>
        
        <userContaxt.Consumer >
            {value =><div>{value}</div>}
        </userContaxt.Consumer>
    </div>
  )
}

export default CompD