// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

function Albumsdetails() {
  let [Albumsdetails, setAlbums] = useState([]);
  fetch("http://localhost:8000/albums")
  .then(response => response.json())
  .then(
    data => {
      setAlbums(data);
  });  
  return (
    <div className="Detailles albums">
    <ul>{Albumsdetails.map(album => <li key={album.id}>   
              <h2>{album.name}</h2>
              <p>id de l'artiste : {album.artist_id}</p>
              <p>{album.description}</p>
              <img src={album.cover} />
              <p> date de sortie : {album.release_date}</p>
              <p> Rangs de popularité :{album.popularity}</p>
              </li>
              )}</ul>
    </div>
  );
}

export default Albumsdetails;