// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import { Card, Icon } from 'semantic-ui-react';

const ReposResults = ({ repoList }) => (
    <Card.Group centered itemsPerRow={5} doubling={true}>
    {/* doubling est une propriété donnée par SemanticUI pour le responsive */}
        {repoList.map((repo) => (
            <Card
                key={repo.id}
                image={repo.owner.avatar_url}
                header={repo.name}
                meta={repo.owner.login}
                description={repo.description}
                extra={(
                    <a>
                        <Icon name='star' />
                        {repo.stargazers_count}
                    </a>
                )}
            />
        ))}
    </Card.Group>
);

ReposResults.propTypes = {
    repoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            owner: PropTypes.shape({
                avatar_url: PropTypes.string.isRequired,
                login: PropTypes.string.isRequired,
            }),
            stargazers_count: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

ReposResults.defaultProps = {
    repoList: PropTypes.arrayOf(
        PropTypes.shape({
            description: '',
        }),
    ).isRequired,
}

export default ReposResults;