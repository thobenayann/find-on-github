// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import { Message as SemanticMessage } from 'semantic-ui-react';

const Message = ({ nbRepos }) => (
    <SemanticMessage >
        {nbRepos} résultats de recherche
    </SemanticMessage>
);

Message.propTypes = {
    nbRepos: PropTypes.number.isRequired,
};

export default Message;