import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import Card from "../../../../components/Card";
import { Joke } from "../../../../models/Joke";
import "./style.css";

type Props = {
  data: Joke[];
  count?: number;
  loadMore: boolean;
  handleLoadMore: () => void;
};

const JokeList = ({ data, loadMore, handleLoadMore }: Props) => {
  const navigate = useNavigate();

  const handleClick = (id: string | undefined) => navigate(`/details/${id}`);
  return (
    <>
      <div className="container">
        <div className="jokes">
          {data.map((joke: Joke) => (
            <Card
              key={joke.id}
              item={joke}
              onClick={() => handleClick(joke.id)}
            />
          ))}
        </div>
      </div>

      {loadMore && (
        <div className="bottom-btn">
          <Button
            onClick={handleLoadMore}
            name="viewMore"
            label="VIEW MORE"
            className="btn primary-outline"
            icon={<FontAwesomeIcon icon={faArrowDown} />}
          />
        </div>
      )}
    </>
  );
};

export default JokeList;
