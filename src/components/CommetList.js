import React from 'react'
import Commet from './Commet'

const CommetList = ({commets}) => {
  return commets.map((commet, index)=>(
    <div>
        <Commet key={index} data={commet}/>
          <div className='pl-8 '>
        <Commet key={index} data={commet}/>
        <Commet key={index} data={commet}/>
        <Commet key={index} data={commet}/>
        <Commet key={index} data={commet}/>
        <Commet key={index} data={commet}/>

        </div>
    </div>

  ))
}

export default CommetList