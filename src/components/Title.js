import React from "react";
import { BsFilterLeft } from "react-icons/bs";

const Title = () => {
  return (
    <>
      <main className="main-title">
        <ul className="title">
          <li>
            <a href="/nearest">Nearest rides</a>
          </li>
          <li>
            <a href="/upcoming">Upcoming rides (4)</a>
          </li>
          <li>
            <a href="/past">Past rides (2)</a>
          </li>
        </ul>
        <div className="dropdown">
          <BsFilterLeft className="filter" />
          <h4>Filters</h4>
        </div>
      </main>
    </>
  );
};

export default Title;
