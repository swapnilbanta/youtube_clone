import React, {  useState } from 'react';
import { formatViewCount } from '../utils/helper';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import { FaShare } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import useWatch from '../Hooks/useWatch';
const WatchDescription = () => {
  const [showFullDescription, setShowFullDescription] = useState(false); // State to track if full description should be shown
  const watch = useWatch();
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <div className="m-5">
      {watch && (
        <>
          <div className="mb-8 w-4/6">
  <h1 className="text-2xl font-bold mb-2">{watch?.snippet?.title}</h1>
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <img className="w-12 h-12 rounded-full" src={watch?.snippet?.thumbnails?.medium?.url} alt="Thumbnail" />
      <p className="text-lg ml-4 font-bold">{watch?.snippet?.channelTitle}</p>
      <button className="mx-4 rounded-full p-2 font-bold bg-black text-white">Subscribe</button>
    </div>
    <div className="flex items-center p-3 space-x-3">
    <button className="flex items-center bg-gray-100 rounded-full p-2 font-bold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
  <FaThumbsUp className="mr-2 text-blue-500" />
  <span className="mr-2 text-gray-700">{watch?.statistics?.likeCount}</span>
  <FaThumbsDown className="mr-2 text-red-500" />
</button>
<button className="flex items-center bg-gray-100 rounded-full p-2 font-bold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
  <FaShare className="mr-2 text-gray-500"/>
  Share
  </button>

  <button className="flex items-center bg-gray-100 rounded-full p-2 font-bold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
  <RiDownloadLine className="mr-2 text-gray-500"/>
  Downloads
  </button>
    </div>
  </div>
</div>
          <div className='bg-gray-100 w-4/6 p-6 rounded-lg'> 
          <div className='flex'>
          <p className="mt-2 font-semibold">{formatViewCount(watch?.statistics?.viewCount)} Views</p>
            <p className="text-lg  mt-2 ml-2  font-semibold">
  {watch && watch.snippet && watch.snippet.publishedAt && (
    new Date(watch.snippet.publishedAt).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    })
  )}
</p>
</div>
    <p className="mt-2">{showFullDescription ? watch?.snippet?.description : `${watch?.snippet?.description.slice(0, 200)}...`}</p>
            {watch?.snippet?.description.length > 200 && ( // Display "see more" button if description is longer than 200 characters
              <button className="text-black font-semibold mt-2" onClick={toggleDescription}>
                {showFullDescription ? 'Show less' : '...more'}
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
