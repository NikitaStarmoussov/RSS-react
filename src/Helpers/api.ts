import { createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../types/Item";

export const fetchItems = createAsyncThunk<Item[], { query: string; newOffset: number; limit: number }, { rejectValue: string }>(
    'items/fetchItems',
    async ({ query, newOffset, limit }, { rejectWithValue }) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}&skip=${newOffset}&limit=${limit}`);
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        console.log(data.products);
        return data.products;
      } catch (error) {
        return rejectWithValue((error as Error).message);
      }
    }
  );