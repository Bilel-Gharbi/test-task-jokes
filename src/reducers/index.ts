import { combineReducers } from "@reduxjs/toolkit";
import jokeSLice from "./jokes/jokesSlice";
import jokesCategoriesSlice from "./jokes/jokesCategoriesSlice";

const rootReducer = combineReducers({
  jokeSLice,
  jokesCategoriesSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
