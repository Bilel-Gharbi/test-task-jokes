import React from "react";
import constants from "../../../../utils/constants";
import "./style.css";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <>
      <div className="sidebar">
        <h4 className="sidebarTitle">The Top 10 jokes in this week</h4>
        <ul>
          {constants.mockJokes.map((joke: string) => (
            <li key={joke} className="sidebarItem">
              <button>{joke}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
