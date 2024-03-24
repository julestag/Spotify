import React, { useState, useEffect } from 'react';

function RandomAlbums() {
  const [randomAlbums, setRandomAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/albums")
      .then(response => response.json())
      .then(data => {
          const max = data.length - 1;
          let tmpRandomAlbums = [];
          for (let i = 0; i < 10; i++) {
            let tmp = Math.floor(Math.random() * max);
            tmpRandomAlbums.push(data[tmp]);
          }
          setRandomAlbums(tmpRandomAlbums);
          let interval = setInterval(function () {  //https://devtrium.com/posts/set-interval-react#the-code
            let tmpRandomAlbums = [];
            for (let i = 0; i < 10; i++) {
              let tmp = Math.floor(Math.random() * max);
              tmpRandomAlbums.push(data[tmp]);
            }
            setRandomAlbums(tmpRandomAlbums);
          }, 1000 * 60);
        return () => clearInterval(interval);
      });
  }, []);

  return(
    <div>
      <h2>Suggestion d'Albums</h2>
      <ul>
      {randomAlbums.map(album => (
          <li key={album.id}><a href="#">{album.name}</a></li>
      ))}
      </ul>
    </div>
  )
}

export default RandomAlbums;