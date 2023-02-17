import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdMic} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './SearchBox.css';

const SearchBox = (props) => {

  let navigate = useNavigate();
  return (
   <div className="search-box">
     <AiOutlineSearch className='search-icon'/>
     <input type="text" placeholder='Search Google or Type a Url' onKeyDown={e => 
     {if(e.key=="Enter")
    {
      props.handleEnter();
      localStorage.setItem('search',e.target.value);
      navigate('/search');
    }}}/>
     <IoMdMic className='voice-search'/>
   </div>
  );
}

export default SearchBox;
