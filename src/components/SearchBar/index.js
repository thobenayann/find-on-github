// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import components
import { Input, Form, Image } from 'semantic-ui-react';

// == Import image
import logoGithub from '../../assets/images/logo-github.png';

const SearchBar = ({ handleSubmit }) => {
    const [search, setSearch] = useState('');

    return (
        <>
            <Image centered size="medium" src={ logoGithub }/>
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
        </>
    );
};

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;