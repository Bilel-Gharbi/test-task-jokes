import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getJokes, fetchJokes } from "../../reducers/jokes/jokesSlice";
import {
  getJokesCategories,
  fetchJokesCategories,
} from "../../reducers/jokes/jokesCategoriesSlice";
import CategoriesList from "./components/CategoriesList";
import JokeList from "./components/JokeList";
import { Joke } from "../../models/Joke";

const Home = () => {
  const [viewMoreCategory, setViewMoreCategory] = useState<boolean>(false);
  const [viewMoreJoke, setViewMoreJoke] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [pageLimit] = useState<number>(10);
  const [categoriesListPreview, setCategoriesListPreview] = useState<string[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [jokeList, setJokeList] = useState<Joke[]>([]);
  const { list, count } = useAppSelector(getJokes);
  const categories = useAppSelector(getJokesCategories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchJokes());
    dispatch(fetchJokesCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) dispatch(fetchJokes({ search: selectedCategory }));
  }, [selectedCategory, dispatch]);

  useEffect(() => {
    if (list.length) setJokeList(list.slice(0, pageLimit));
    if (categories && !viewMoreCategory)
      setCategoriesListPreview(categories.list.slice(0, 7));
    if (viewMoreCategory) setCategoriesListPreview(categories.list);
    else setCategoriesListPreview(categories.list.slice(0, 7));
  }, [categories, viewMoreCategory, list, pageLimit]);

  useEffect(() => {
    if (page > 1 && jokeList.length !== list.length) {
      setJokeList([
        ...jokeList,
        ...list.slice(pageLimit * page, pageLimit * page + pageLimit),
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (jokeList.length === 20) setViewMoreJoke(false);
  }, [jokeList]);

  const handleLoadMore = () => setPage(page + 1);

  return (
    <>
      <CategoriesList
        list={categoriesListPreview}
        viewMore={viewMoreCategory}
        handleViewMore={setViewMoreCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <JokeList
        data={jokeList}
        count={count}
        loadMore={viewMoreJoke}
        handleLoadMore={handleLoadMore}
      />
    </>
  );
};

export default Home;
