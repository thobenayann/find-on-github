// == Import npm
import React from 'react';

// == Import components
import { Card, Icon } from 'semantic-ui-react';

const ReposResults = () => (
    <Card.Group>
        <Card
            image='https://picsum.photos/290/290'
            header='react'
            meta='Facebook'
            description='React sert à faire des interfaces trop classes'
            extra={(
                <a>
                    <Icon name='star' />
                    5000 stars
                </a>
            )}
        />
        <Card
            image='https://picsum.photos/290/290'
            header='react'
            meta='Facebook'
            description='React sert à faire des interfaces trop classes'
            extra={(
                <a>
                    <Icon name='star' />
                    5000 stars
                </a>
            )}
        />
    </Card.Group>
);

export default ReposResults;