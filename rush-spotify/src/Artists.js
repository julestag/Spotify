import React, { useState, useEffect } from 'react';
import styles from './App.module.css';


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

  var div = document.getElementById("div_select")
  if(div == null){
   return;
  }else(
    div.innerHTML = ""
  )
  var p = document.getElementById("where");
    p.innerHTML = "Artists";
  return (
    <div className={styles.divContent}>
      <ul className={styles.filteredResult}>
      {currentArtists.map(artists => (
          <li key={artists.id} className={styles.filteredResult}><a href="#">{artists.name}</a></li>
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