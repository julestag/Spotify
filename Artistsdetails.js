// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

function Artistsdetails() {
  let [artistsdetails, setArtists] = useState([]);
  fetch("http://localhost:8000/artists")
  .then(response => response.json())
  .then(
    data => {
      setArtists(data);
  });  
  return (
    <div className="Detailles artistes">
    <ul>{artistsdetails.map(artist => <li key={artist.id}>   
              <h2>{artist.name}</h2>
              <p>{artist.description}</p>
              <p>{artist.bio}</p>
              <img src={artist.photo} /></li>)}</ul>
    </div>
  );
}

export default Artistsdetails;