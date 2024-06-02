import React, { useEffect, useState } from 'react';
import { GOOGLE_API_KEY, YOUTUBE_POPULAR_VIDEOS } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerCard from '../ShimmerUI/ShimmerCard';
import { FaSpinner } from 'react-icons/fa'; 

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight &&
      !loading
    ) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getVideos();
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => {
      window.removeEventListener('scroll', handleInfiniteScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (loading && nextPageToken) {
        await getMoreVideos();
        setLoading(false);
      }
    };
    fetchData();
  }, [loading, nextPageToken]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS);
    const json = await data.json();
    setVideos(json.items);
    setNextPageToken(json.nextPageToken);
  };

  const getMoreVideos = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&pageToken=${nextPageToken}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    setVideos(prevVideos => [...prevVideos, ...json.items]);
    setNextPageToken(json.nextPageToken);
  };

  return videos?.length === 0 ? (
    <ShimmerCard />
  ) : (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
       {loading && <div className="loading-icon"><FaSpinner className="spinner animate-spin text-blue-500 h-12 w-12" /></div>}
    </div>
  );
};

export default VideoContainer;
