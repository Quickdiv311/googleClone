import React from 'react';
import { Link } from 'react-router-dom';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import './SearchResult.css';

const SearchResult = (props) => {
  return (
   <div className="search-result">
       <p className='displayLink'>{props.result.displayLink}<BiDotsVerticalRounded className='three-dots'/></p>
       <Link style={{color: '#205ec2', fontSize: '25px'}} to={props.result.link}>{props.result.title}</Link>
       <p className='snippet'>{props.result.snippet}</p>
   </div>
  );
}

export default SearchResult;
