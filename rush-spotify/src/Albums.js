import React, { useState, useEffect } from 'react';
import styles from './App.module.css';


function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/albums")
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const albumsPerPage = 32;
  const lastIndex = currentPage * albumsPerPage;
  const firstIndex = lastIndex - albumsPerPage;
  const currentAlbums = albums.slice(firstIndex, lastIndex);
  const numberOfButtons = Math.ceil(albums.length / albumsPerPage);
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
    p.innerHTML = "Albums";
  return (
    <div className={styles.divContent}>
      <ul className={styles.filteredResult}>
      {currentAlbums.map(album => (
          <li key={album.id} className={styles.filteredResult}><a href="#">{album.name}</a></li>
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

export default Albums;