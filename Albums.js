import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.name}</Link> {/* Remplace le Href , au clic sur Le name , redirige vers /artist/et l'id artist */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
