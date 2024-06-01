import React from 'react'
import Commet from './Commet'

const CommetList = ({commets}) => {
  return commets.map((commet, index)=>(
    <div>
          <div className='pl-8 '>
        <Commet key={index} data={commet.snippet}/>

        </div>
    </div>

  ))
}

export default CommetList