import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue" 
                style={{borderRadius: '10px', width: '300px', textAlign: 'center'}}
                type="search" 
                placeholder="search robots"
                onChange={searchChange}>
            </input>
        </div>
    );
}

export default SearchBox;