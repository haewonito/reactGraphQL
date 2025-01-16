import './App.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import CountryList from './components/CountryList.jsx'
import SongList from './components/SongList.jsx'


function App() {
    return (
        <div>
            <h1>GraphQL React App</h1>


            <h1>SongList</h1>
            <SongList />

            <h1>Country List</h1>

            <CountryList />

        </div>
    );
}

export default App
