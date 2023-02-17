import React from 'react';
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import SearchBox from '../../Components/SearchBox/SearchBox';
import './Home.css';

const Home = () => {


  return (
   <div className="home">
    <HomeHeader/>
    <div className="home-content">
        <img src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw" alt="" className='google-icon'/>
        <div className="search-container">
        <SearchBox/>
        </div>
    </div>
   </div>
  );
}

export default Home;
