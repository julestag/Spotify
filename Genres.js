import React, { useState, useEffect } from 'react';

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
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;