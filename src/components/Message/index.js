// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import { Message as SemanticMessage } from 'semantic-ui-react';

// == Import du style
import './message.scss';

const Message = ({ nbRepos }) => (
    <div className='messageContainer'>
        <SemanticMessage color='green'>
            {nbRepos} résultats de recherche
        </SemanticMessage>
    </div>
);

Message.propTypes = {
    nbRepos: PropTypes.number,
};

Message.defaultProps = {
    nbRepos: null,
};

export default Message;