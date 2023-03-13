import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
    fetchPlayers
} from './api';

import axios from 'axios';

import {
    RosterList,
    SearchBar,
    SearchResults
} from './components';

const App = () => {
    const [results, setResults] = useState([]);
    fetchPlayers().then(console.log)

    return (
        <div id="app">
            <SearchBar setResults={ setResults }/>
            <SearchResults results = { results }/>
            <RosterList />

        </div>
    )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App tab='home' />)