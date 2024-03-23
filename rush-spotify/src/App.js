import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Albums from './Albums';
import Genres from './Genres';
import Artists from './Artists';
import Artistsdetails from './Artistsdetails';

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
              <a href="/artistsdetails">Details artist</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/albums" element={<Albums />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artistsdetails" element={<Artistsdetails />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;