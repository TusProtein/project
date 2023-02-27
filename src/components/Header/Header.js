import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <nav className={cx("navigation")}>
          <Link to="/">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" />
          </Link>
          <Button>Movies</Button> 
          <Button>TV Shows</Button>
          <Button>People</Button>
          <Button>More</Button>
        </nav>
        <div className={cx("actions")}>
          <Button more>
            <FontAwesomeIcon icon={faPlusSquare}/>
          </Button>
          <Button outline>
            EN
          </Button>
          <Button>Login</Button>
          <Button>Join TMDB</Button>
          <Button search>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
