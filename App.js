import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Albums from './Albums';
import Genres from './Genres';
import Artists from './Artists';
import ArtistDetails from './ArtistDetails';
import AlbumDetails from './AlbumD';
import GenreDetails from './GenreD';
import RandomAlbums from './RandomAlbums.js';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <a href="/albums">Albums</a>
            </li>
            <li>
              <a href="/genres">Genres</a>
            </li>
            <li>
              <a href="/artists">Artistes</a>
            </li>
            <li>
              <a href="/random">Suggestions</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/albums" element={<Albums />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<ArtistDetails />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
          <Route path="/genres/:id" element={<GenreDetails />} />
          <Route path="/random" element={<RandomAlbums />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;