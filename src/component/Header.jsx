import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCog, faFilter, faBell } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleDashboard } from './Slice';

const Header = () => {
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch(toggleDashboard());
    }
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      {  }
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faTachometerAlt} className="text-white text-xl cursor-pointer" onClick={handleClick} />
        <FontAwesomeIcon icon={faCog} className="text-white text-xl cursor-pointer" />
        <FontAwesomeIcon icon={faFilter} className="text-white text-xl cursor-pointer" />
        
       
        <div className="relative">
          <input
            type="text"
            className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none"
            placeholder="Search..."
          />
        </div>
      </div>

      
      <div>
        <FontAwesomeIcon icon={faBell} className="text-white text-xl cursor-pointer" />
      </div>
    </header>
  )
}

export default Header
