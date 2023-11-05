import React from 'react';

import FilmList from './components/FilmList';
import { ErrorBoundary } from './components/ErrorBoundary';

interface AppProps {}



const App: React.FC<AppProps> = () => {

  

  return (
    <ErrorBoundary>
      <div>
        <FilmList
        />
      </div>
    </ErrorBoundary>
  );
};

export default App;
