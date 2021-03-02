// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import { Message } from 'semantic-ui-react';

// == Import style
import './errorMessage.scss';

const ErrorMessage = ({ text }) => (
    <div className='errorMessageContainer' >
        <Message negative>{text}</Message> 
    </div>
);

ErrorMessage.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ErrorMessage;