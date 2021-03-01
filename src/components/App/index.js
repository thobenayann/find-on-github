// == Import npm
import React, {useState} from 'react';
import axios from 'axios';

// == Import components
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';

// == Import static data
import data from '../../data/repos';

// == Import CSS
// import './app.scss';

function App() {
  // tableau de nos repos dans le state
  const [repos, setRepos] = useState([]);
  // Nombre de résultats de recherche
  const [totalCount, setTotalCount] = useState(null);
  // null est falsy

  // requête axios pour la récupération de la liste des repos
  const onSubmit = (searchTerm) => {
    // Query string avec notre variable searchTerm récupérée depuis l'input de SemanticUI
    axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`)
      .then((response) => {
        setRepos(response.data.items);
        setTotalCount(response.data.total_count);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <div className="app">
      <SearchBar 
        handleSubmit={onSubmit}
      />
      {/* affichage conditionnel, si on a pas de repos, on affiche pas le message */}
      { totalCount && <Message nbRepos={totalCount} />}
      <ReposResults repoList={repos} />
    </div>
  );
}

export default App;