import React, { Dispatch } from "react";
import { createContext } from "react";

export const AppContext = createContext({searchQuery: "", setSearchQuery: {} as Dispatch<React.SetStateAction<string>>});