import React, { useEffect, useState } from 'react';
import ResultsHeader from '../../Components/ResultsHeader/ResultsHeader';
import SearchResult from '../../Components/SearchResult/SearchResult';
import './SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState();
  
  function handleEnter()
  {
    let seachInp = localStorage.getItem('search');
    setInput(seachInp);
  }


  useEffect(() => {
  let seachInp = localStorage.getItem('search');
      fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyB5DQFja8G4xISguhpp8XM9Tfgzvpwsb8s&cx=9ec571f86697d07ac&q="+seachInp)
      .then((res) => res.json())
      .then((res) => 
      {
        setResults(res.items);
      }
      );
  },[input]);

  return (
   <div className="search-results">
   <ResultsHeader handleEnter={handleEnter}/>
    <div className="results">
       {
          results.map((result) => (
            <SearchResult result={result}/>
          ))
       }
       </div>
   </div>
  );
}

export default SearchResults;
