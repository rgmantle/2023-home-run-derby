import React from 'react';
import Card from './Card';
import './SearchResults.css'

const SearchResults = ({ results }) => {
    return (
        <div id="results">
            <h3>
                Here's what was found: ({results.length}) players.
            </h3>
            <div className='CardList'>
            {
                results.map(result => (
                    <Card key={result.id} {...result} />
                ))
            }
            </div>
        </div>
    );
}

export default SearchResults