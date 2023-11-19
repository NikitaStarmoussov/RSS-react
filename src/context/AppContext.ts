// import React, { Dispatch } from "react";
// import { createContext } from "react";
// import Item from "../types/types";
import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
    searchQuery: string
}

const searchInitialState: SearchState = {
    searchQuery: localStorage.getItem("query") || ""
}

const searchSlice = createSlice({
    name: "search",
    initialState: searchInitialState,
    reducers: {
        setInputValue(state, action) {
            state.searchQuery = action.payload;
          },
    }
})

export default searchSlice.reducer
export const { setInputValue } = searchSlice.actions;

// export const AppContext = createContext({searchQuery: "", setSearchQuery: {} as Dispatch<React.SetStateAction<string>>});

// export const ItemsContext = createContext({items: [] as Item[], setItems: {} as Dispatch<React.SetStateAction<Item[]>>});