import React, { useState, useEffect } from 'react';

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
        {artists.map(artist => ( // Pour Artists On parcourt les donnée
         <a href="#"><li key={artist.id}>{artist.name}</li></a>  // Pour chaque clés trouvées(artist) ,pour chaque clé key=ID on affiche dans un li son name
        ))}
      </ul>
    </div>
  );
}

export default Artists;
