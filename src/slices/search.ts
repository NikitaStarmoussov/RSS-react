import { createSlice } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_SEARCH_VALUE, getLocalStorage } from '../Helpers/localStorage';

const initialState = {
  value: getLocalStorage(LOCAL_STORAGE_SEARCH_VALUE) || '',
};

const searchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { actions, reducer } = searchSlice;