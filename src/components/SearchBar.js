import React, { useState } from 'react';

import {
    fetchPlayers
} from '../api';

const SearchBar = ({ setResults }) => {

    const [player_name, setName] = useState('');
    const [group, setGroup] = useState('');

    const handleNameChange = event => {
        setName( event.target.value );
    }

    const handleGroupChange = event => {
        setGroup( event.target.value );
    }


    async function handleSubmit(event) {
        event.preventDefault();

        const players = await fetchPlayers({
            player_name,
            group
        });
        setResults(players)
    }


    return (
    <div id="search">
        <h3>Look up players here...</h3>
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                placeholder="player search"
                value={ player_name }
                onChange={handleNameChange} />
            <input 
                type="text" 
                placeholder="group search"
                value= {group }
                onChange={handleGroupChange} />
            <button type="submit">Search</button>
        </form>
    </div>
    );
}

export default SearchBar