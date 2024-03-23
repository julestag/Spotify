//import logo from './logo.svg';
import logo from './image/spotify.png';
import albums from './image/albums.png';
import artistes from './image/artistes.png';
import genre from './image/genre.png'
import recherchePage from './recherche.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './App.js'



import styles from './App.module.css';

function App() {
  fetch("http://localhost:8000/albums")
  .then(response => response.json())
  .then(data=> console.log(data));
  
  return (
    <div className={styles.div}>
      <div className={styles.menu}>
      <img src={logo} className={styles.size} alt="logo spotify"></img>

      <a href="@" className={styles.aMenu}>Accueil</a>
      <a href="@" className={styles.aMenu}>Recherche</a>
      <hr className={styles.hr}></hr>
      </div>


      <div>
        <p className={styles.pWhere}>Accueil</p>
      </div>
      
      <div className={styles.divSelect}>
        <a href="@"><img src={genre} alt="genre"  className={styles.imgSelect}></img></a>
        <a href="@"><img src={artistes} alt="genre" className={styles.imgSelect}></img></a>
        <a href="@"><img src={albums} alt="genre" className={styles.imgSelect}></img></a>
      </div>
    </div>
  );
}

export default App;
