import React from 'react';

import FilmList from './components/FilmList';
import { ErrorBoundary } from './components/ErrorBoundary';
import {
  createBrowserRouter, 
  // createRoutesFromElements,
  // Route, 
  RouterProvider
} from 'react-router-dom'
// import{ RootLayout } from './layout/RootLayout';

interface AppProps {}



const App: React.FC<AppProps> = () => {

  const router = createBrowserRouter(
[
      {
        path: '/',
        element: <FilmList />,
      },
      {
        path: '/:id',
        element: <FilmList />,
      },
    ]
  )

  

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;
