import { faUser, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

type Props = {};

const Header = (props: Props) => {
  const navigation = useNavigate();
  const navigate = (page: string) => {
    navigation(page);
  };
  return (
    <>
      <header className="navbar">
        <div className="navigation-menu">
          <div onClick={() => navigate("/")} className="navbar-item">
            SO FUNKTIONIERT'S
          </div>
          <div onClick={() => navigate("/")} className="navbar-item">
            SONDERANGEBORE
          </div>
          <div className={"navbar-item main-area"}>
            <FontAwesomeIcon icon={faUser} />
            <span>MEIN BEREICH</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        <div className="navbar-item icon">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </header>
    </>
  );
};

export default Header;
