// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import components
import { Card, Icon, Button, Grid } from 'semantic-ui-react';

// == Import style
import './reposResults.scss';

const ReposResults = ({ repoList, onNextPageClick, isLoading }) => (
    <div className="reposResults__container">
        <Card.Group centered itemsPerRow={5} doubling={true}>
        {/* doubling est une propriété donnée par SemanticUI pour le responsive */}
            {repoList.map((repo) => (
                <Card
                    className="card"
                    key={repo.id}
                    image={repo.owner.avatar_url}
                    href={repo.html_url}
                    target="_blank"
                    header={repo.name}
                    meta={repo.owner.login}
                    description={repo.description}
                    extra={(
                        <>
                            <Icon name='star' />
                            {repo.stargazers_count}
                        </>
                    )}
                />
            ))}
        </Card.Group>
        {/* affichage conditionnel du bouton "afficher plus" : ne s'affiche que si on a déjà des repos */}
        {repoList.length > 0 && ( // la grid sert à centrer le bouton
            <Grid>
                <Grid.Column textAlign="center">
                    <Button onClick={onNextPageClick}>
                        {isLoading // affichage conditionnel de notre loader
                            ? <Icon loading name='spinner' />
                            : <Icon name='angle double down' />}
                        Charger plus de résultats
                    </Button>
                </Grid.Column>
            </Grid>
        )}
    </div>
);

ReposResults.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    repoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            html_url: PropTypes.string.isRequired,
            owner: PropTypes.shape({
                avatar_url: PropTypes.string.isRequired,
                login: PropTypes.string.isRequired,
            }),
            stargazers_count: PropTypes.number.isRequired,
        }),
    ).isRequired,
    onNextPageClick: PropTypes.func.isRequired,
};

ReposResults.defaultProps = {
    repoList: PropTypes.arrayOf(
        PropTypes.shape({
            description: '',
        }),
    ).isRequired,
}

export default ReposResults;