import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MusicSection from './Components/MusicSection';
import Sidebar from './Components/Sidebar';
import './styles/styles.css';
import Player from './Components/Player';

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Routes>
            <Route path="/rock" element={<MusicSection sectionId="rockSection" />} />
            <Route path="/pop" element={<MusicSection sectionId="popSection" />} />
            <Route path="/hiphop" element={<MusicSection sectionId="hipHopSection" />} />
          </Routes>
          <Player/>
        </div>
      </div>
    </Router>
  );
};

export default App;
