import React from 'react'
import CommetList from './CommetList';
import useCommet from '../Hooks/useCommet';

const CommetConatiner = () => {
   const commetsData = useCommet();
 return (
    <div className='m-5 p-2 w-4/6 '>  
        <CommetList commets = {commetsData} / >
    </div>
  )
}

export default CommetConatiner;