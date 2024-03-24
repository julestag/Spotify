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
  const [currentPage, setCurrentPage] = useState(1);
  const artistsPerPage = 32;
  const lastIndex = currentPage * artistsPerPage;
  const firstIndex = lastIndex - artistsPerPage;
  const currentArtists = artists.slice(firstIndex, lastIndex);
  const numberOfButtons = Math.ceil(artists.length / artistsPerPage);
  const arrayButtons = [];
  for(let i = 1; i<= numberOfButtons; i++){
    arrayButtons.push(i);
  }
  return (
    <div>
      <h2>Albums</h2>
      <ul>
      {currentArtists.map(artist => (
            <p key={artist.id}><Link key={artist.id} to={`/artists/${artist.id}`}>{artist.name}</Link></p> /* Remplace le Href , au clic sur Le name , redirige vers /artist/et l'id artist */
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

export default Artists;