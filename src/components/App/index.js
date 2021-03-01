// == Import npm
import React, {useState} from 'react';
import axios from 'axios';

// == Import components
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';
import Loader from '../Loader';

// == Import static data
import data from '../../data/repos';

// == Import CSS
// import './app.scss';

function App() {
  // tableau de nos repos dans le state
  const [repos, setRepos] = useState([]);
  // Nombre de résultats de recherche
  // null est falsy
  const [totalCount, setTotalCount] = useState(null);
  // booléen indiquant le chargement de data
  const [isLoading, setIsLoading] = useState(false);


  // requête axios pour la récupération de la liste des repos
  const onSubmit = (searchTerm) => {
    // On active le Loader
    setIsLoading(true);
    // Query string avec notre variable searchTerm récupérée depuis l'input de SemanticUI
    axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`)
      .then((response) => {
        setRepos(response.data.items);
        setTotalCount(response.data.total_count);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        // ce que contient finally sera exécuté à la fin de la requête
        // qu'elle échoue ou non
        setIsLoading(false);
      })
  };

  return (
    <div className="app">
      <SearchBar 
        handleSubmit={onSubmit}
      />
      {/* affichage conditionnel, si on a pas de repos, on affiche pas le message */}
      { totalCount && <Message nbRepos={totalCount} />}
      {/* Utilisation d'un ternaire pour conditionner l'affichage de notre Loader */}
      { isLoading
          ? <Loader />
          : <ReposResults repoList={repos} />
      }
    </div>
  );
}

export default App;