import React, { Dispatch } from "react";
import { createContext } from "react";
import Item from "../types/types";

export const AppContext = createContext({searchQuery: "", setSearchQuery: {} as Dispatch<React.SetStateAction<string>>});

export const ItemsContext = createContext({items: [] as Item[], setItems: {} as Dispatch<React.SetStateAction<Item[]>>});