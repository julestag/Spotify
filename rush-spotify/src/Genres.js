import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/genres")
      .then(response => response.json())
      .then(data => {
        setGenres(data);
      });
  }, []);

  var div = document.getElementById("div_select")
  if(div == null){
   return;
  }else(
    div.innerHTML = ""
  )
  var p = document.getElementById("where");
    p.innerHTML = "Genres";
  return (
    <div className={styles.divContent}>
      <ul className={styles.filteredResult}>
        {genres.map(genre => (
          <li key={genre.id}  className={styles.filteredResult}> <Link key={genre.id} to={`/genres/${genre.id}`}>{genre.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;