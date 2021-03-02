// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import { Input, Form, Image } from 'semantic-ui-react';

// == Import image
import logoGithub from '../../assets/images/logo-github.png';

// == Import Style
import './searchBar.scss';

const SearchBar = ({ handleSubmit, searchValue, setSearchValue }) => {

    return (
        <div className="searchBarContainer">
            <Image centered size="medium" src={ logoGithub }/>
            <Form
                onSubmit={() => {
                    // le composant Form de Semantic UI fait un event.preventDefault
                    // Ici, je n'ai donc pas besoin du paramètre event ni de la fonction preventDefault
                    handleSubmit();
                }}
            >
                <Input
                    fluid
                    icon="search"
                    placeholder='Recherche de repos'
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                />
            </Form>
        </div>
    );
};

SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    setSearchValue: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
};

export default SearchBar;