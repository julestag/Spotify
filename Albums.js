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

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
         <a href="#"><li key={album.id}>{album.name}</li></a>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
