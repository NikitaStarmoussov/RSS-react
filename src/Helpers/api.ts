import { createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../types/Item";

export const fetchItems = createAsyncThunk<Item[], { query: string; page: number; limit: number }, { rejectValue: string }>(
    'items/fetchItems',
    async ({ query, page, limit }, { rejectWithValue }) => {
        try {
        const newOffset = (page - 1) * limit;
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}&skip=${newOffset}&limit=${limit}`);
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        return data.products;
      } catch (error) {
        return rejectWithValue((error as Error).message);
      }
    }
  );