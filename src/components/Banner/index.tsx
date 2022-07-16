import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import constants from "../../utils/constants";
import "./style.css";

type Props = {};

const Banner = (props: Props) => {
  const handleSearch = () => {
    // dispatch action search here
  };
  return (
    <>
      <div className="banner">
        <img className="image" src={constants.bannerImgUrl} alt="#" />
        <div className="container">
          <div className="content">
            <h1 className="bannerTitle">The Joke Bible</h1>
            <h3 className="subtitle">Daily Laughs for your and yours</h3>
            <div className="search-bar">
              <input
                className="search-input"
                placeholder="How can we make you laugh today?"
              />
              <span className="btn-search">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="lg"
                  onClick={handleSearch}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
