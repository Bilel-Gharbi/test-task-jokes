/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  fetchJokeById,
  fetchRandomJoke,
  getJokeItem,
} from "../../reducers/jokes/jokesSlice";
import JokeItemDetails from "./components/JokeItemDetails";
import SideBar from "./components/SideBar";
import "./style.css";

type Props = {};

const Details = (props: Props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const joke = useAppSelector(getJokeItem);

  useEffect(() => {
    if (id) dispatch(fetchJokeById(id));
  }, [id]);

  const handleNextOrPreviousJoke = () => {
    dispatch(fetchRandomJoke());
  };
  return (
    <>
      <div className="container jokeDetailsContent">
        <JokeItemDetails
          item={joke}
          handleNextOrPreviousJoke={handleNextOrPreviousJoke}
        />
        <SideBar />
      </div>
    </>
  );
};

export default Details;
