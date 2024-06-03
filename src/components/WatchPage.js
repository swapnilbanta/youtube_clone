import React, { useEffect } from 'react';
import SideBar from './SideBar';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommetConatiner from './CommetConatiner';
import LiveChat from './LiveChat';
import WatchDescription from './WatchDescription';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className=''>
        <div className='px-5 flex'>
        <SideBar />
          <div className='rounded-full'>
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>
          <div className='w-full'>
        <LiveChat/>
          </div>
        </div>
      </div>
      <WatchDescription />
      <CommetConatiner />
     
    </>
  );
};

export default WatchPage;
