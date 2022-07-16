import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { getJokesCategoriesService } from "../../services/joke";

export interface JokeState {
  list: Array<any>;
  count: number;
  status: "idle" | "loading" | "failed";
}

const initialState: JokeState = {
  list: [],
  count: 0,
  status: "idle",
};

export const fetchJokesCategories = createAsyncThunk(
  "jokesCategories/fetchJokeCategories",
  async () => {
    const response: any = await getJokesCategoriesService();
    return response;
  }
);

export const jokeCategoriesSlice = createSlice({
  name: "jokesCategories",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchJokesCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJokesCategories.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.count = payload.length;
        state.list = [...payload];
      })
      .addCase(fetchJokesCategories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const {} = jokeCategoriesSlice.actions;

export const getJokesCategories = (state: RootState) =>
  state.jokesCategoriesList;

export default jokeCategoriesSlice.reducer;
