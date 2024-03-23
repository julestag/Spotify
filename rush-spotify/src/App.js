// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';

function App() {
  let [albums, setAlbums] = useState([]);
  fetch("http://localhost:8000/albums")
  .then(response => response.json())
  .then(
    data => {
      setAlbums(data);
  });  
  return (
    <div className="albums">
    <ul>{albums.map(albums => <li key={albums.id}> {albums.name} </li>)}</ul>
    </div>
  );
}

export default App;