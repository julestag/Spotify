import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function ArtistDetails() {
  const [artist, setArtist] = useState(null);// remplis la data artist par le SetArtist qui récupere la data du fetch
  const { id } = useParams(); // Récupérer l'ID de l'artiste depuis l'URL
  useEffect(() => {
    fetch(`http://localhost:8000/artists/${id}`)
      .then(response => response.json())
      .then(data => {
        setArtist(data);
      });
  }, [id]); // on synchronise Id au fetch (associe) 

  if (!artist) {
    return
  }
  return (
    <div>
      <h2>{artist.name}</h2>
      <img src={artist.photo} alt={artist.name} />
      <p>Description : {artist.description}</p>
      <p>Bio : {artist.bio}</p>
    </div>
  );
}

export default ArtistDetails;
