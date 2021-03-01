// == Import npm
import React from 'react';

// == Import components
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';


// == Import CSS
import '../../styles/index.scss';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="app">
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

export default App;