import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_SEARCH_PAGE, LOCAL_STORAGE_SEARCH_LIMIT ,getLocalStorage } from '../Helpers/localStorage';

const initialState = {
    page: Number(getLocalStorage(LOCAL_STORAGE_SEARCH_PAGE)) || 1,
    limit: Number(getLocalStorage(LOCAL_STORAGE_SEARCH_LIMIT)) || 10,
};

const paramsSlice = createSlice({
  name: 'Params',
  initialState,
  reducers: {
    incrementPage: (state, action) => {
      state.page = action.payload;
    },
    decrementPage: (state, action) => {
      state.page = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
});

export const { actions, reducer } = paramsSlice;