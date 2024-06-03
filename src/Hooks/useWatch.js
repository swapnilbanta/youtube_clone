import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../utils/constants';

const useWatch = () => {
    const [watch, setWatch] = useState(null);
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        watchData();
      }, []);
      const watchData = async () => {
        try {
          const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=${GOOGLE_API_KEY}`);
          const json = await data.json();
          console.log(json);
          if (json.items && json.items.length > 0) {
            setWatch(json.items[0]);
          } else {
            setError('Video not found');
          }
        } catch (error) {
          setError('Error fetching watch data');
        } finally {
          setLoading(false);
        }
      };
    
  return   watch;
}

export default useWatch