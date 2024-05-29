import React from 'react'
import Commet from './Commet';
import CommetList from './CommetList';

const CommetConatiner = () => {

    const commetData = [
        {
            name:"swapnil banta",
            text:"loreum ispum sit amet, caonstructor",
            replies:[
                {
                 name:"rajesh banta",
                    text:"loreum ispum sit amet, caonstructor"
        
                },
                {
                     name:"rajesh banta",
                       text:"loreum ispum sit amet, caonstructor"
           
                   },
                   {
                    name:"rajesh banta",
                       text:"loreum ispum sit amet, caonstructor"
           
                   },

            ]
        },
        {
            name:"swapnil banta",
            text:"loreum ispum sit amet, caonstructor",
            replies:[
                {
                 name:"rajesh banta",
                    text:"loreum ispum sit amet, caonstructor"
        
                },
                {
                     name:"rajesh banta",
                       text:"loreum ispum sit amet, caonstructor"
           
                   },
                   {
                    name:"rajesh banta",
                       text:"loreum ispum sit amet, caonstructor"
           
                   },

            ]
        },
        {
            name:"swapnil banta",
            text:"loreum ispum sit amet, caonstructor",
            replies:[
                {
                 name:"rajesh banta",
                    text:"loreum ispum sit amet, caonstructor"
        
                },
                {
                     name:"rajesh banta",
                       text:"loreum ispum sit amet, caonstructor"
           
                   },
                   {
                    name:"rajesh banta",
                       text:"loreum ispum sit amet, caonstructor"
           
                   },

            ]
        },
        {
            name:"swapnil banta",
            text:"loreum ispum sit amet, caonstructor",
            replies:[
                {
                 name:"rajesh banta",
                    text:"loreum ispum sit amet, caonstructor"
        
                },
                {
                     name:"rajesh banta",
                       text:"loreum ispum sit amet, caonstructor"
           
                   },
                   {
                    name:"rajesh banta",
                       text:"loreum ispum sit amet, caonstructor"
           
                   },

            ]
        },
    ]
  return (
    <div className='m-5 p-2 w-3/6'>
        <h1 className='text-2xl font-bold'> Commets: </h1>
        <CommetList commets = {commetData} / >
    </div>
  )
}

export default CommetConatiner;