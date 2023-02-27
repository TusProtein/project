import classNames from "classnames/bind";
import styles from "./Social.module.scss";
import Menu from "../../../components/Menu";
import Review from "./Review";
import Discussion from "./Discussions";
import { useState } from "react";

const cx = classNames.bind(styles);

const REVIEWS_ITEM = {
  key: "reviews",
  value: "Reviews"
}

const DISCUSSIONS_ITEM = {
  key: "discussions",
  value: "Discussions"
}

const SOCIAL_SUB_MENU = [REVIEWS_ITEM, DISCUSSIONS_ITEM];

function Social({ title }) {
  const [content, setContent] = useState("reviews");
  const handleChangeContent = (type) => {
    setContent(type);
  };

  let Component = content === "reviews" ? Review : Discussion;

  let extend = content === "Reviews" ? "Read All Reviews" : "Go to Discussions";

  return (
    <div className={cx("wrapper")}>
      <Menu title={title} subMenu={SOCIAL_SUB_MENU} onClick={handleChangeContent}>
        <Component />
      </Menu>
      <h3 className={cx("extend")}>{extend}</h3>
    </div>
  );
}

export default Social;
