import classNames from "classnames/bind";
import styles from "./Media.module.scss";
import Menu from "../../../components/Menu";
import MostPopular from "./MostPopular";
import Videos from "./Videos";
import Backdrops from "./Backdrops";
import Posters from "./Posters";
import { useState } from "react";

const cx = classNames.bind(styles);

const MOST_POPULAR_ITEM = {
  key: "mostPopular",
  value: "Most Popular"
}

const VIDEOS_ITEM = {
  key: "videos",
  value: "Videos"
}

const BACKDROPS_ITEM = {
  key: "backdrops",
  value: "Backdrops"
}

const POSTERS_ITEM = {
  key: "posters",
  value: "Posters"
}

const MEDIA_SUB_MENU = [MOST_POPULAR_ITEM, VIDEOS_ITEM, BACKDROPS_ITEM, POSTERS_ITEM];

function Media({ title }) {
  const [content, setContent] = useState("mostPopular");
  const handleChangeContent = (type) => {
    setContent(type);
  };

  let Component = MostPopular;
  let extend = "";
  switch (content) {
    case "mostPopular":
      Component = MostPopular;
      extend = "";
      break;
    case "videos":
      Component = Videos;
      extend = "View All Videos";
      break;
    case "backdrops":
      Component = Backdrops;
      extend = "View All Backdrops";
      break;
    case "posters":
      Component = Posters;
      extend = "View All Posters";
      break;
    default:
      break;
  }

  return (
    <div className={cx("wrapper")}>
      <Menu title={title} subMenu={MEDIA_SUB_MENU} onClick={handleChangeContent}>
        <Component />
        <Component />
        <Component />
        <Component />
        <Component />
      </Menu>
      <h3 className={cx("extend")}>{extend}</h3>
    </div>
  );
}

export default Media;
