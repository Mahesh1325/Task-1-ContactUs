import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice.";

const rootReducer = combineReducers({
  user: userReducer,
});

// load from localStorage
const loadState = () => {
  if (typeof window === "undefined") return undefined;

  try {
    const serializedState = localStorage.getItem("reduxState");
    if (!serializedState) return undefined;

    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

// save to localStorage
const saveState = (state: unknown) => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("reduxState", JSON.stringify(state));
  } catch {}
};

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
