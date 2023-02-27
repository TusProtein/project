import classNames from "classnames/bind";
import styles from "./Posters.module.scss";

const cx = classNames.bind(styles);

function Posters() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://www.themoviedb.org/t/p/w220_and_h330_face/9wxlK92Do1D7SmEFGHnL9lVYUEh.jpg"
        alt="image"
      />
    </div>
  );
}

export default Posters;
