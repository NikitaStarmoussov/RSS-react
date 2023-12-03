import { createSlice } from '@reduxjs/toolkit';

const countriesSlice = createSlice({
  name: 'countries',
  initialState: [
    { id: 1, name: 'India' },
    { id: 2, name: 'Usa' },
    { id: 3, name: 'China' },

  ],
  reducers: {},
});

export const { actions, reducer } = countriesSlice;