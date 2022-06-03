// Packages
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS & Servcices
import './App.css';

// Routes
import IndexRoute from './Index/IndexRoute';
import VideoPlayerRoute from './videoPlayer/videoPlayer';

document.title = "PlayShare";

function App() {
  return (
    <header className="App-header">
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<IndexRoute />} />
            <Route path="/session" element={<VideoPlayerRoute />} />
          </Routes>
        </div>
      </BrowserRouter>
    </header>
  );
}

export default App;
