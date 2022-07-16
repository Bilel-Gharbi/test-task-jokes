import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Joke } from "../../models/Joke";
import { RootState } from "../../store";
import {
  getJokeByIdService,
  getJokesService,
  getRandomJokeService,
} from "../../services/joke";
import { GetJokesParams } from "../../services/joke/interface";

export interface JokeState {
  list: Array<Joke>;
  count: number;
  status: "idle" | "loading" | "failed";
  selectItem: Joke | {};
}

const initialState: JokeState = {
  list: [],
  count: 0,
  status: "idle",
  selectItem: {},
};

export const fetchJokes = createAsyncThunk(
  "joke/fetchJoke",
  async (query?: GetJokesParams) => {
    const response: any = await getJokesService(query);
    return response;
  }
);
export const fetchJokeById = createAsyncThunk(
  "joke/fetchJokeItem",
  async (id: string) => {
    const response: any = await getJokeByIdService(id);
    return response;
  }
);
export const fetchRandomJoke = createAsyncThunk(
  "joke/fetchRandomJoke",
  async () => {
    const response: any = await getRandomJokeService();
    return response;
  }
);

export const jokeSLice = createSlice({
  name: "joke",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchJokes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJokes.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.count = payload.total;
        state.list = [...payload.result];
      })
      .addCase(fetchJokes.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchJokeById.fulfilled, (state, { payload }) => {
        state.selectItem = payload;
      })
      .addCase(fetchRandomJoke.fulfilled, (state, { payload }) => {
        state.selectItem = payload;
      });
  },
});

// export const {} = jokeSLice.actions;

export const getJokes = (state: RootState) => state.jokesList;
export const getJokeItem = (state: RootState) => state.jokesList.selectItem;

export default jokeSLice.reducer;
