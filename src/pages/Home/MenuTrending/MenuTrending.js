import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./MenuTrending.module.scss";

import CardFilm from "./CardFilm/CardFilm.js";
import Menu from "../../../components/Menu";

const cx = classNames.bind(styles);

const TODAY_ITEM = {
  key: "toDay",
  value: "Today",
};

const THIS_WEEK_ITEM = {
  key: "thisWeek",
  value: "This Week",
};

const TRENDING_SUB_MENU = [TODAY_ITEM, THIS_WEEK_ITEM];

function MenuTrending({ title, dataRender }) {
  const [content, setContent] = useState("toDay");

  const [listMovieTrendingDay, listMovieTrendingWeek] = dataRender;

  const handleChangeContent = (type) => {
    setContent(type);
  };

  let data = [];

  switch (content) {
    case "toDay":
      data = listMovieTrendingDay;
      break;
    case "thisWeek":
      data = listMovieTrendingWeek;
      break;
    default:
      break;
  }

  return (
    <div className={cx("wrapper")}>
      <Menu
        title={title}
        subMenu={TRENDING_SUB_MENU}
        onClick={handleChangeContent}
      >
        {data.map((item) => (
          <CardFilm key={item.id} dataCardFilm={item} />
        ))}
      </Menu>
    </div>
  );
}

export default MenuTrending;
