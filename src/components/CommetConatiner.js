import React, { useEffect, useState } from 'react'
import CommetList from './CommetList';
import {  useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, YOUTUBE_COMMET_API } from '../utils/constants';

const CommetConatiner = () => {
    const [searchParams] = useSearchParams();
    const[commetsData, setCommets] = useState([]);
    const id = searchParams.get("v")
useEffect(()=>{
    getCommetsData();
},[]);
const getCommetsData = async ()=>{
const data =  await fetch(YOUTUBE_COMMET_API+id+"&key="+GOOGLE_API_KEY);
const json = await data.json();
setCommets(json.items);
}
 return (
    <div className='m-5 p-2 w-3/6'>
        <h1 className='text-2xl font-bold'> Commets: </h1>
        <CommetList commets = {commetsData} / >
    </div>
  )
}

export default CommetConatiner;