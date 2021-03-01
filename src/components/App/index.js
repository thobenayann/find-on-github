// == Import npm
import React from 'react';

// == Import components
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';

// == Import static data
import data from '../../data/repos';

// == Import CSS
import '../../styles/index.scss';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="app">
      <SearchBar 
        handleSubmit={(search) => {
          console.log('je suis dans app et search vaut :', search);
        }}
      />
      <Message nbRepos={1000} />
      <ReposResults repoList={data.items} />
    </div>
  );
}

export default App;