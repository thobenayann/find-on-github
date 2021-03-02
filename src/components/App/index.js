// == Import npm
import React, {useState} from 'react';
import axios from 'axios';

// == Import components
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

// == Import CSS
import './app.scss';

function App() {
  // tableau de nos repos dans le state
  const [repos, setRepos] = useState([]);
  // Nombre de résultats de recherche
  // null est falsy
  const [totalCount, setTotalCount] = useState(null);
  // booléen indiquant le chargement de data
  const [isLoading, setIsLoading] = useState(false);
  // valeur du cham controlé
  const [search, setSearch] = useState('');
  // page courante
  const [page, setPage] = useState(1);
  // erreur
  const [hasError, setHasError] = useState(false);


  // requête axios pour la récupération de la liste des repos
  const onSubmit = (searchTerm) => { // si search est à vide ...
    if (search === '') { // on sort de la fonction
      return;
    };
    // on vide nos repos, afin de voir le loader
    setRepos([]);
    // On active le Loader
    setIsLoading(true);
    // Query string avec notre variable searchTerm récupérée depuis l'input de SemanticUI
    axios.get(`https://api.github.com/search/repositories?q=${search}`)
      .then((response) => {
        setRepos(response.data.items);
        setTotalCount(response.data.total_count);
        // on peut imaginer faire plusieurs requêtes d'affiler
        // si ma première échoue mais ma seconde réussie
        // je dois remettre hasError à false (pour ne pas afficher mon message d'erreur)
        setHasError(false);
      })
      .catch((error) => {
        console.log('error', error);
        setHasError(true);
      })
      .finally(() => {
        // ce que contient finally sera exécuté à la fin de la requête
        // qu'elle échoue ou non
        setIsLoading(false);
      })
  };

  // Une fonction qui réagit au onClick sur le bouton "charger plus de repos"
  const loadMoreRepos = () => {
    const newPage = page + 1;

    // On active le Loader
    setIsLoading(true);

    // Query string avec notre variable searchTerm récupérée depuis l'input de SemanticUI
    axios.get(`https://api.github.com/search/repositories?q=${search}&page=${newPage}`)
      .then((response) => {
        // ajout des résultats de la nouvelle page
        // je veux garder l'ancien tableau et ajouter le résultat de la nouvelle requête
        // du coup, je vais créer un nouveau tableau
        // car on ne doit pas modifier le state directement (pour éviter tout effet de bord)
        const newRepos = [...repos, ...response.data.items]; // on déverse les anciens repos et les nouveaux dans un seul tableau
        setRepos(newRepos);
        setHasError(false);
      })
      .catch((error) => {
        console.log('error', error);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
        setPage(newPage);
      })
  }

  return (
    <div className="app">
      <SearchBar
        setSearchValue={setSearch}
        searchValue={search}
        handleSubmit={onSubmit}
      />
      {/* affichage conditionnel, si on a pas de repos, on affiche pas le message */}
      { totalCount && <Message nbRepos={totalCount} />}
      {hasError && <ErrorMessage text="Erreur de récupération des repos"/>}
      <ReposResults
        isLoading={isLoading}
        repoList={repos}
        onNextPageClick={loadMoreRepos}
      />
      {/* le tout premier chargement : j'ai 0 données */}
      { isLoading && repos.length === 0 && <Loader />}
    </div>
  );
}

export default App;