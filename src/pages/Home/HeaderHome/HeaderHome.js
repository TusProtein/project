import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./HeaderHome.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);

function HeaderHome() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("welcome")}>
        <div className={cx("intro")}>
          <h2 className={cx("Welcome-text")}>Welcome.</h2>
          <h3 className={cx("infor-text")}>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className={cx("search")}>
          <div className={cx("search-content")}>
            <input
              className={cx("input")}
              placeholder="Search for a movie, tv show, person....."
              onChange={(e) => {
                handleInputValue(e);
              }}
            />
            <Link className={cx("btn")} to={`/search/${searchValue}`}>
              Search
            </Link>
          </div>
        </div>
      </div>
      <div className={cx("news")}>
        <h2 className={cx("news-title")}>
          THAT'S A <br /> WRAP 2022
        </h2>
        <p className={cx("news-infor")}>The best (and worst) from 2022.</p>
        <button className={cx("btn-check")}>Check it out</button>
      </div>
    </div>
  );
}

export default HeaderHome;
