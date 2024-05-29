import React from 'react'

const Commet = ({data}) => {
    const {name, text, replies} = data;
  return <div className=' shadow-sm bg-gray-50 p-2 my-2  rounded-lg'>
 <img className="w-12 h-12 " alt="user" src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg" />
<div className='px-3'> 
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
</div>

  </div>;
  
}

export default Commet