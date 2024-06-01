import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex m-2'>
<img  className="h-8" alt="user" src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"/>
<span className='font-bold px-2'>{name}</span>
<span>{message}</span>

</div>
  )
}

export default ChatMessage