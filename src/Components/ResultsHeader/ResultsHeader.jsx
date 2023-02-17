import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import {FiSettings} from 'react-icons/fi';
import {CgProfile} from 'react-icons/cg';
import {BiDotsVerticalRounded} from 'react-icons/bi';

import './ResultsHeader.css';

const ResultsHeader = (props) => {

 function handleEnter()
 {
    props.handleEnter();
 }

  return (
   <div className="results-header">
      <div className="left-results-header">
        <img src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="" className='google-search-icon'/>
        <SearchBox handleEnter={handleEnter}/>
        </div>
      <div className="right-results-header">
         <FiSettings size={30} className="settings"/>
         <BiDotsVerticalRounded size={30} className="dots"/>
            <CgProfile size={30}/>
      </div>
   </div>
  );
}

export default ResultsHeader;
