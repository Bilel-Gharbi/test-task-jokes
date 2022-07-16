import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import jokesReducer from "../reducers/jokes/jokesSlice";
import jokesReducerList from "../reducers/jokes/jokesCategoriesSlice";

export const store = configureStore({
  reducer: {
    jokesList: jokesReducer,
    jokesCategoriesList: jokesReducerList,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
