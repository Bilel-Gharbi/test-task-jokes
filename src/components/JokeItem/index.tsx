import React from "react";
import { Joke } from "../../models/Joke";

type Props = {
  joke?: Joke;
};

const JokeItem = (props: Props) => {
  return (
    <>
      <div className="joke-item">
        <div className="top">
          <div className="title">
            <img
              src={`${process.env.PUBLIC_URL}/assets/orange-light.png`}
              alt="#"
              //   alt={joke.value}
            />
            {/* <div>{joke.categories?.join(",") || "Uncategorized"}</div> */}
          </div>
          {/* <div className="value">{joke.value}</div> */}
          <div className="value">444</div>
        </div>
        <button
          className="btn btn-default"
          //   className={`${classes.btn} btn-default`}
          //   onClick={() => navigate(`/jokes/${joke.id}`)}
        >
          See stats {/* <FontAwesomeIcon icon={faArrowRight} /> */}
        </button>
      </div>
    </>
  );
};

export default JokeItem;
