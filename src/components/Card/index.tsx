import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Joke } from "../../models/Joke";
import constants from "../../utils/constants";
import "./style.css";

type Props = {
  item: Joke;
  onClick?: () => void;
};

const Card = ({ item, onClick }: Props) => {
  return (
    <>
      <div className="item">
        <div className="top">
          <div className="title">
            <img src={constants.blitzIconUrl} alt={item.value} />
            <div>
              {(item.categories.length && item.categories?.join(",")) ||
                "Uncategorized"}
            </div>
          </div>
          <div className="description">{item.value}</div>
        </div>
        <button className="btn btn-default" onClick={onClick}>
          See stats <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  );
};

export default Card;
