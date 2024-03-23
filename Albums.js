import React, { useState, useEffect } from 'react';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/albums")
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
      });
  }, []);
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
    <div>
      <h2>Albums</h2>
      <ul>
      {currentAlbums.map(album => (
          <li key={album.id}><a href="#">{album.name}</a></li>
      ))}
      </ul>
      <div>
        {arrayButtons.map((index) => (
          <button key={index} onClick={() => setCurrentPage(index)}>{index}</button>
        ))}
      </div>
    </div>
  );
}

export default Albums;