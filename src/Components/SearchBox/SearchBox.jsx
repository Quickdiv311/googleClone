import React, { useEffect, useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdMic} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './SearchBox.css';

const SearchBox = (props) => {

  const [input, setInput] = useState();

  useEffect(() => {
    if(props.isSearch)
    {
      let input = localStorage.getItem('search');
      setInput(input);
    }
  },[props]);
 

  let navigate = useNavigate();
  return (
   <div className="search-box">
     <AiOutlineSearch className='search-icon'/>
     <input type="search" placeholder='Search Google or Type a Url' value={input} onInput={e => setInput(e.target.value)} onKeyDown={e => 
     {if(e.key=="Enter")
    {
      if(props.isSearch)
      {
        props.handleEnter();
      }
      localStorage.setItem('search',e.target.value);
      navigate('/search');
    }}}/>
     <IoMdMic className='voice-search'/>
   </div>
  );
}

export default SearchBox;
