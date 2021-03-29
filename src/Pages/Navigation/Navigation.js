import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Cart from "../Components/Cart";
import User from "../Components/User";
import Search from "../Components/Search";
import Justify from "../Components/Justify";
import SearchBox from "../Search/Searchbox2";
import { MediaQuery } from "../helper";

import "./navigation.css";

const Navigation = ({ toggle }) => {
  let history = useHistory();
  const { width } = MediaQuery();

  const breakpoint = 280;

  function newSearch() {
    history.push("/search");
  }

  function home() {
    history.push("/");
  }

  return (
    <header className="nav-header ">
      <div className="category ">
        <Justify
          width={breakpoint < width ? 30 : 20}
          height={breakpoint < width ? 30 : 20}
          action={toggle}
        />
        <div className="okukus" onClick={home}>
          OKUKUS
        </div>
      </div>

      {width > 540 ? (
        <div className="category">
          <SearchBox />
        </div>
      ) : null}

      <div className="category">
        {width < 540 ? (
          <div className="object-3 search  ">
            <Search
              width={breakpoint < width ? 30 : 20}
              height={breakpoint < width ? 30 : 20}
              action={newSearch}
            />
          </div>
        ) : null}

        <div className="object-4 cart  ">
          <Cart
            width={breakpoint < width ? 30 : 20}
            height={breakpoint < width ? 30 : 20}
            action={() => {
              history.push("/cart");
            }}
          />
        </div>

        <div className="object-4 user  ">
          <User
            width={breakpoint < width ? 30 : 20}
            height={breakpoint < width ? 30 : 20}
            action={() => {
              history.push("/user/profile");
            }}
          />
        </div>

        <div
          className="object-4 user  "
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </div>
      </div>
    </header>
  );
};

export default Navigation;

Navigation.propTypes = {};
