import { configureStore } from "@reduxjs/toolkit";
import * as search from "../slices/search";
import * as items from "../slices/itemsSlice";

describe("configureStore", () => {
  test("should create a store with the correct reducers", () => {
    const store = configureStore({
      reducer: {
        search: search.reducer,
        items: items.reducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          serializableCheck: false,
        });
      },
    });
    
    expect(store.getState().search).toBeDefined();
    expect(store.getState().items).toBeDefined();
  });
});