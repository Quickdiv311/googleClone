import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SearchResults from './Pages/SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<SearchResults/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
