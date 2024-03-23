import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Albums from './Albums.js';
import Genres from './Genres.js';
import Artists from './Artists.js';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <a href="/albums">Albums</a>
            </li>
            <li>
              <a href="/genres">Genres</a>
            </li>
            <li>
              <a href="/artists">Artistes</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/albums" element={<Albums />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/artists" element={<Artists />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [albums, setAlbums] = useState([]);

//   fetch("http://localhost:8000/albums")
//     .then(response => response.json())
//     .then(data => {
//       setAlbums(data);
//   })

  // const [currentPage, setCurrentPage] = useState(1);
  // const albumsPerPage = 32;
  // const lastIndex = currentPage * albumsPerPage;
  // const firstIndex = lastIndex - albumsPerPage;
  // const currentAlbums = albums.slice(firstIndex, lastIndex);
  // const numberOfButtons = Math.ceil(albums.length / albumsPerPage);
  // const arrayButtons = [];
  // for(let i = 1; i<= numberOfButtons; i++){
  //   arrayButtons.push(i);
  // }
//   return (
  //   <div className="app">
      // {currentAlbums.map(album => (
      //     <p>{album.name}</p>
      // ))}
      
      // <div>
      //   {arrayButtons.map((index) => (
      //     <button onClick={() => setCurrentPage(index)}>{index}</button>
      //   ))}
      // </div>
  //   </div>
  // );
// }

// export default App;