import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, YOUTUBE_COMMET_API } from '../utils/constants';

const useCommet = () => {
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
  return commetsData;
}

export default useCommet