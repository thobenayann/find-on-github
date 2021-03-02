// == Import npm
import React from 'react';

// == Import components
import { Sticky, Header as SemanticHeader } from 'semantic-ui-react';

// == Import du style
import './header.scss';

const Header = () => (
    <Sticky>
        <header className="header--home">
            <SemanticHeader textAlign='center' size='huge' className="header--home__title">
                Find on Github
            </SemanticHeader>
        </header>
    </Sticky>
);

export default Header;