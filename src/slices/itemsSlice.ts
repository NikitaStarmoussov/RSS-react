import { Reducer, createSlice } from '@reduxjs/toolkit';
import { fetchItems } from '../Helpers/api';
import {Item} from "../types/Item"

export interface ItemsState {
    data: Item[];
    loading: boolean;
    error: string | null;
}
export type ItemsReducerState = ReturnType<Reducer<ItemsState>>; 

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
    loading: true,
    error: null,
  } as ItemsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload ;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

export const { actions, reducer } = itemsSlice;