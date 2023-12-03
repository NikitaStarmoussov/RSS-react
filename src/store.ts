import { configureStore } from "@reduxjs/toolkit";
import * as user from "./slice"

export type storeSelector = ReturnType<typeof store.getState>


const store = configureStore({
    reducer: {
        search: user.reducer,
       
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export default store;