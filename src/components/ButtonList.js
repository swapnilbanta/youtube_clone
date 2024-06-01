import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All",
              "Gmaing",
              "Songs",
              "Live",
              "Cricket",
              "Soccer",
              "News",
              "Cooking",
              "Valenties",
              "Mixes",
              "Live",
              "T-series",
               "News",
              "Stocks"
              ,"Watched",
              "Mantras"];
  return (
    <div className='flex'>
    {
      list.map((element,index)=>{
        return <Button key={index} name={element}/>

      })
      
    }
      
      </div>
  )
}

export default ButtonList