import { configureStore } from '@reduxjs/toolkit';
import groupsSlice from "./slices/groupsSlice.ts";
import errorSlice from "./slices/errorSlice.ts";

const store = configureStore({
  reducer: {
    groups: groupsSlice,
    error: errorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;