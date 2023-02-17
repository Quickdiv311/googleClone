import React from 'react';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg';
import './HomeHeader.css';

const HomeHeader = () => {
  return (
   <div className="home-header">
      <div className="left-home-header"></div>
      <div className="right-home-header">
        <p className="home-link">Gmail</p>
        <p className="home-link">Images</p>
            <BiDotsVerticalRounded size={30} className="dots"/>
            <CgProfile size={20}/>
      </div>
   </div>
  );
}

export default HomeHeader;
