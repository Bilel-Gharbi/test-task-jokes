import { AxiosResponse } from "axios";
import request from "../../utils/request";
import { GetJokesParams } from "./interface";

export const getJokesService = (
  params?: GetJokesParams
): Promise<AxiosResponse> => {
  return request.get("/jokes/search", {
    params: { query: params?.search || "all" },
  });
};
export const getJokeByIdService = (id: string): Promise<AxiosResponse> => {
  return request.get(`/jokes/${id}`);
};
export const getRandomJokeService = (): Promise<AxiosResponse> => {
  return request.get(`/jokes/random`);
};
export const getJokesCategoriesService = (): Promise<AxiosResponse> => {
  return request.get("/jokes/categories");
};
