// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import components
import { Input, Form } from 'semantic-ui-react';

const SearchBar = ({ handleSubmit }) => {
    const [search, setSearch] = useState('');

    return (
        <Form
            onSubmit={() => {
                // le composant Form de Semantic UI fait un event.preventDefault
                // Ici, je n'ai donc pas besoin du paramètre event ni de la fonction preventDefault
                handleSubmit(search);
            }}
        >
            <Input
                fluid
                icon="search"
                placeholder='Recherche de repos'
                value={search}
                onChange={(event) => {
                    console.log(event.target.value);
                    setSearch(event.target.value);
                }}
            />
        </Form>
    );
};

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;