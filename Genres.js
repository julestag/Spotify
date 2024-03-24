import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/genres")
      .then(response => response.json())
      .then(data => {
        setGenres(data);
      });
  }, []);

  return (
    <div>
      <h2>Genres</h2>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>
            <Link to={`/genres/${genre.id}`}>{genre.name}</Link> {/* Remplace le Href , au clic sur Le name , redirige vers /artist/et l'id artist */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;
