import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); // State to track whether to show suggestions or not
  const searchCache = useSelector(store=> store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  useEffect(() => {
    const timer = setTimeout(()=>{
if(searchCache[searchQuery]){
  setShowSuggestions(searchCache[searchQuery]);
}
else{
  getSearchSuggestions();
}


    });
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    setShowSuggestions(true); // Show suggestions after fetching
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  }

  

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
        <img
          className='h-10 cursor-pointer'
          onClick={toggleMenuHandler}
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img className="h-10 mx-2" alt="youtube_logo" src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png" />
        </a>
      </div>

      <div className='col-span-10'>
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-1/2 px-5 border border-gray-400 p-2 rounded-l-full'
            type="text"
            placeholder='search'
            onFocus={()=> setShowSuggestions(true)}
            onBlur={()=> setShowSuggestions(false)}
          />
          <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
            🔍
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && ( // Show suggestions only if there are suggestions available
          <div className='fixed bg-white py-5 px-5 w-[31rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestions.map(s => <li key={s} className='px-3 py-2 shadow-sm hover:bg-gray-100'>🔍{s}</li>)}
            </ul>
          </div>
        )}

      </div>

      <div className='col-span-1 px-10'>
        <img className="h-8" alt="user" src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg" />
      </div>

    </div>
  )
}

export default Head;
