// == Import npm
import React from 'react';

// == Import components
import { Input } from 'semantic-ui-react';

const SearchBar = () => (
    <div>
        <Input
            fluid
            icon="search"
            placeholder='Recherche de repos'
            value=""
            onChange={(event) => {
                console.log(event.target.value);
            }}
        />
    </div>
);

export default SearchBar;