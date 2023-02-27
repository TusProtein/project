import classNames from "classnames/bind";
import styles from "./Discussion.module.scss";

const cx = classNames.bind(styles);

function Discussion() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        Want to be notified when someone makes the first post? Yes, notify me!
      </div>
    </div>
  );
}

export default Discussion;
