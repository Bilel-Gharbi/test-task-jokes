import React from "react";
import constants from "../../utils/constants";
import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img className="image" src={constants.footerImgUrl} alt="#" />
        <div className="container">
          {/* ${classes.container} */}
          <div className="content">
            <h3 className="title">
              Lorem ipsum dolor
              <br />
              sit, amet
            </h3>
            <button className="btn btn-default">
              See stats {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
