// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

function App() {
  let [artists, setArtists] = useState([]);
  fetch("http://localhost:8000/artists")
  .then(response => response.json())
  .then(
    data => {
      setArtists(data);
  });  
  return (
    <div className="artistes">
    <ul>{artists.map(artists => <li key={artists.id}>   
              <h2>{artists.name}</h2>
              <p>{artists.description}</p>
              <p>{artists.bio}</p>
              <img src={artists.photo} /></li>)}</ul>
    </div>
  );
}

export default App;