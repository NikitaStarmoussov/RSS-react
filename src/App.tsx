import React from 'react';

import FilmList, {itemsLoader } from './components/FilmList';
import { ErrorBoundary } from './components/ErrorBoundary';
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  // createRoutesFromElements,
  // Route, 
  RouterProvider
} from 'react-router-dom'
// import{ RootLayout } from './layout/RootLayout';

interface AppProps {}



const App: React.FC<AppProps> = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" loader={itemsLoader} element={<FilmList />}>
        <Route path=":page" loader={itemsLoader}  element={<FilmList />} />
        {/* <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
          <Route 
            index 
            element={<Careers />} 
            loader={careersLoader}
            // errorElement={<CareersError />}
          />
          <Route 
            path=":id" 
            element={<CareerDetails />}
            loader={careerDetailsLoader}
          />
        </Route>
  
        <Route path="*" element={<NotFound />} /> */}
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


