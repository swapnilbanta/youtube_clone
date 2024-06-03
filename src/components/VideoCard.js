import React from 'react';
import { formatViewCount } from '../utils/helper';

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return (
        <div className="p-2 w-72 mb-2">
            <img className='rounded-lg w-90 shadow-lg' alt="thumbnail" src={thumbnails.medium.url}/>
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{formatViewCount(statistics?.viewCount)} views</li>
            </ul>
        </div>
    );
};
export const AdVideoCard = ({info})=>{
    return   <div className="border border-red-900 m-1 p-1"><VideoCard
    info={info}
    /></div>;
}
export default VideoCard;
