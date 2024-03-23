import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/artists")
      .then(response => response.json())
      .then(data => {
        setArtists(data);
      });
  }, []);

  return (
    <div>
      <h2>Artistes</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <Link to={`/artist/${artist.id}`}>{artist.name}</Link> {/* Remplace le Href , au clic sur Le name , redirige vers /artist/et l'id artist */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Artists;
