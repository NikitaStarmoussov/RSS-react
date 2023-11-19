import { configureStore } from "@reduxjs/toolkit";
import * as search from "../slices/search";
import * as items from "../slices/itemsSlice";
import * as params from "../slices/paramsSlice";

export type storeSelector = ReturnType<typeof store.getState>


const store = configureStore({
    reducer: {
        search: search.reducer,
        items: items.reducer,
        params: params.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export default store;