import classNames from "classnames/bind";
import styles from "./Videos.module.scss";

const cx = classNames.bind(styles);

function Videos() {
  return (
    <div className={cx("wrapper")}>
      <video
        src="https://www.themoviedb.org/movie/558-spider-man-2#play=3jBFwltrxJw"
        controls="controls"
      >
        Dòng thông báo
      </video>
    </div>
  );
}

export default Videos;
