import { configureStore } from "@reduxjs/toolkit";
import * as user from "./slice"
import * as countries from "./countries-slice"


export type storeSelector = ReturnType<typeof store.getState>


const store = configureStore({
    reducer: {
        search: user.reducer,
       countries: countries.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export default store;