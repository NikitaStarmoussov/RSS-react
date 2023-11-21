import React from 'react';


import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom'
import Main from './pages/Main';
import Item from '../react-next/src/components/Item';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { ItemsState } from './slices/itemsSlice';



interface AppProps {}
export type AppDispatch = ThunkDispatch<ItemsState, unknown, AnyAction>;



const App: React.FC<AppProps> = () => {
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<Main />}> 
      <Route path='/*' element={<Item />} />
      </Route>
    )
  )

  

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;


