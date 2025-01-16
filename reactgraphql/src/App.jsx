import './App.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList.jsx';
import SongList from './components/SongList.jsx';
import Home from './components/Home';


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/songs" element={<SongList />} />
                    <Route path="/countries" element={<CountryList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App
