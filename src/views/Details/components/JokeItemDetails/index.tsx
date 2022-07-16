import React from "react";
import {
  faThumbsUp,
  faThumbsDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../../components/Button";
import { Joke } from "../../../../models/Joke";

import "./style.css";

type Props = {
  item: Joke | any;
  handleNextOrPreviousJoke: () => void;
};

const JokeItemDetails = ({ item, handleNextOrPreviousJoke }: Props) => {
  const handleClick = (e: any) => {
    handleNextOrPreviousJoke();
  };

  return (
    <>
      <div className="jokeItemContent">
        <div className="info">
          <div className="tag">
            <span className="tag green has-dot">
              {item?.categories?.join(",") || "Uncategorized"}
            </span>
            <span className="tag has-dot trending orange-text">Trending</span>
          </div>
          <div className="details">
            <h2 className="topTitle">{item?.categories?.join(",")}</h2>
            <p className="ranking">
              <span>No.1</span>
            </p>
            <div className="desc">{item?.value}</div>
          </div>
        </div>

        <div className="rating">
          <div className="like">
            <button className="btn">
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <p className="number">{item?.like || 0}</p>
          </div>
          <div className="dislike">
            <button className="btn">
              <FontAwesomeIcon icon={faThumbsDown} />
            </button>
            <p className="number">{item?.dislike || 0}</p>
          </div>
        </div>

        <div className="navigation">
          <Button
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            name="prev"
            label="prev"
            id="prev"
            className="btn primary-outline btn-prev"
            onClick={(e) => handleClick(e)}
          />

          <Button
            icon={<FontAwesomeIcon icon={faChevronRight} />}
            name="next"
            label="next"
            className="btn primary-outline btn-prev"
            id="next"
            onClick={(e) => handleClick(e)}
          />
        </div>
      </div>
    </>
  );
};

export default JokeItemDetails;
