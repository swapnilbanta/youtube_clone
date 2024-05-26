import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/solid'

const SideBar = () => {
  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);
  //  early return pattern
  if(!isMenuOpen) return null;
 
  return (
    <div className='p-4 shadow-lg w-80'>
      <ul>
        <li>
        <Link to="/"><BeakerIcon className="h-6 w-6 text-blue-500" />Home</Link>
        </li>
        <li>
          Short
        </li>
        <li>
          Videos
        </li>
        <li>
          Live
        </li>

      </ul>
       <h1 className='font-bold pt-5'>Watch later</h1>
      <ul>
        <li>
          Music
        </li>
        <li>
          Sports
        </li>
        <li>
          Gaming
        </li>
        <li>
          Movies
        </li>

      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>
          Music
        </li>
        <li>
          Sports
        </li>
        <li>
          Gaming
        </li>
        <li>
          Movies
        </li>

      </ul>
      </div>
  )
}

export default SideBar