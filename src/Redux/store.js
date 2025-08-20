import { filtersSliceReducer } from "./filtersSlice";
import { contactsSliceReducer } from "./contactsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer,
  },
});
