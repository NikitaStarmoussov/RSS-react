import { configureStore } from "@reduxjs/toolkit";
import * as search from "../slices/search";
import * as items from "../slices/itemsSlice";

const store = configureStore({
    reducer: {
        search: search.reducer,
        items: items.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

export default store;