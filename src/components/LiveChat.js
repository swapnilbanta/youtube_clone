import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from '../utils/chatterSlice';

import { generateRandomName, makeRandomMessage } from '../utils/helper';
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector(store=> store.chat.messages);
  
  useEffect(()=>{
const i =setInterval(()=>{
  dispatch(addMessage({
    name:generateRandomName(),
    message: makeRandomMessage(20),
  }))
},1500);

return ()=> clearTimeout(i);
  },[]);
  return <><div className='w-full h-[500px] ml-2 p-2 
  rounded-lg  overflow-y-scroll  flex flex-col-reverse'> 
  <div>
{
  chatMessage.map((c,i)=><ChatMessage  key={i} name={c.name} message={c.message} />)
}
</div>
  </div>

  <form className="flex items-center justify-between p-2 border-t border-black"
  onSubmit={(e)=>{
    e.preventDefault();
    dispatch(addMessage({
      name:"swapnil banta",
      message:liveMessage
    }))
    setLiveMessage("");
  }}

  >
<input    className="flex-grow px-4 py-2 mr-4 border border-gray-400 rounded-lg" type="text" value={liveMessage}  onChange={(e)=> {setLiveMessage(e.target.value)}}/>
<button className="px-4 py-2 text-white bg-green-500 rounded-lg">Send</button>
  </form>
</>



}

export default LiveChat