import React, { useState, useEffect } from 'react';

function App() {
  const [albums, setAlbums] = useState([]);

  fetch("http://localhost:8000/albums")
    .then(response => response.json())
    .then(data => {
      setAlbums(data);
  })

  const [currentPage, setCurrentPage] = useState(1);
  const albumsPerPage = 32;
  const lastIndex = currentPage * albumsPerPage;
  const firstIndex = lastIndex - albumsPerPage;
  const currentAlbums = albums.slice(firstIndex, lastIndex);
  const numberOfButtons = Math.ceil(albums.length / albumsPerPage);
  const arrayButtons = [];
  for(let i = 1; i<= numberOfButtons; i++){
    arrayButtons.push(i);
  }
  return (
    <div className="app">
      {currentAlbums.map(album => (
          <p>{album.name}</p>
      ))}
      
      <div>
        {arrayButtons.map((index) => (
          <button onClick={() => setCurrentPage(index)}>{index}</button>
        ))}
      </div>
    </div>
  );
}

export default App;