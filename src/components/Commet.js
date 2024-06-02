import React from 'react'

const Commet = ({data}) => {
    const {topLevelComment} = data;
   const {snippet} = topLevelComment;
  return <div className=' shadow-sm bg-gray-50 p-2 my-2  rounded-lg flex'>
 <img className="w-12 h-12   rounded-full " alt="user" src={snippet.authorProfileImageUrl} />
<div className='px-3'> 
    <p className='font-bold'>{snippet.authorDisplayName}</p>
    <p>{snippet.textOriginal}</p>
</div>

  </div>;
  
}

export default Commet