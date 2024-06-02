import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY } from '../utils/constants';

const WatchDescription = () => {
  const [watch, setWatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false); // State to track if full description should be shown
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    watchData();
  }, []);

  const watchData = async () => {
    try {
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get("v")}&key=${GOOGLE_API_KEY}`);
      const json = await data.json();
      if (json.items && json.items.length > 0) {
        setWatch(json.items[0]);
      } else {
        setError('Video not found');
      }
    } catch (error) {
      setError('Error fetching watch data');
      console.error('Error fetching watch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (loading) {
    return <div className="m-5">Loading...</div>;
  }

  if (error) {
    return <div className="m-5">Error: {error}</div>;
  }

  return (
    <div className="m-5">
      {watch && (
        <>
          <div className="mb-8 w-4/6">
            <h1 className="text-2xl font-bold mb-2">{watch?.snippet?.title}</h1>
            <div className="flex items-center">
              <img className="w-12 h-12 rounded-full" src={watch?.snippet?.thumbnails?.medium?.url} alt="Thumbnail" />
              <p className="text-lg ml-4 font-bold">{watch?.snippet?.channelTitle}</p>
              <button className="mx-4 rounded-full p-2 font-bold bg-black text-white">Subscribe</button>
            </div>
          </div>
          <div className='bg-gray-100 w-4/6 p-6 rounded-lg'> 
            <p className="mt-2 font-semibold">{watch?.statistics?.viewCount} Views</p>
            <p className="mt-2">{showFullDescription ? watch?.snippet?.description : `${watch?.snippet?.description.slice(0, 200)}...`}</p>
            {watch?.snippet?.description.length > 200 && ( // Display "see more" button if description is longer than 200 characters
              <button className="text-blue-500 mt-2" onClick={toggleDescription}>
                {showFullDescription ? 'See less' : 'See more'}
              </button>
            )}
          </div>
          <div className='my-8'>
            <h2 className="text-xl font-bold">{watch?.statistics?.commentCount} Comments</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default WatchDescription;
