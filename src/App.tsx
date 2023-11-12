import React from 'react';

import FilmList, {itemsLoader } from './components/FilmList';
import { ErrorBoundary } from './components/ErrorBoundary';
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 

  RouterProvider
} from 'react-router-dom'


interface AppProps {}




const App: React.FC<AppProps> = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" loader={itemsLoader} element={<FilmList />}>
        <Route path=":page" loader={itemsLoader}  element={<FilmList />} />     
      </Route>
    )
  )

  

  return (
    <ErrorBoundary>
      
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;


