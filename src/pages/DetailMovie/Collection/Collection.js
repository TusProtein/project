import classNames from "classnames/bind";
import styles from "./Collection.module.scss";

const cx = classNames.bind(styles);

function Collection() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h2 className={cx("title")}>Part of the Spider-Man Collection</h2>
        <p className={cx("content")}>
          Includes Spider-Man, Spider-Man 2, and Spider-Man 3
        </p>
      </div>
      <div className={cx("view-colection")}>
        <div className={cx("button")}>VIEW THE COLLECTION</div>
      </div>
    </div>
  );
}

export default Collection;
