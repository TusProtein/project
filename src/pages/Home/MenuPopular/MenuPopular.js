import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./MenuPopular.module.scss";

import CardFilm from "./CardFilm/CardFilm.js";
import Menu from "../../../components/Menu";

const cx = classNames.bind(styles);

const ONTV_ITEM = {
  key: "onTv",
  value: "On TV",
};

const IN_THEATERS_ITEM = {
  key: "inTheaters",
  value: "In Theaters",
};

const POPULAR_SUB_MENU = [ONTV_ITEM, IN_THEATERS_ITEM];

function MenuPopular({ title, dataRender }) {
  const [content, setContent] = useState("onTv");

  const [listMoviePopularTv, listMoviePopularTheaters] = dataRender;

  const handleChangeContent = (type) => {
    setContent(type);
  };

  let data = [];

  switch (content) {
    case "onTv":
      data = listMoviePopularTv;
      break;
    case "inTheaters":
      data = listMoviePopularTheaters;
      break;
    default:
      break;
  }

  return (
    <div className={cx("wrapper")}>
      <Menu
        title={title}
        subMenu={POPULAR_SUB_MENU}
        onClick={handleChangeContent}
      >
        {data.map((item, index) => (
          <CardFilm key={item.id} dataCardFilm={item} />
        ))}
      </Menu>
    </div>
  );
}

export default MenuPopular;
