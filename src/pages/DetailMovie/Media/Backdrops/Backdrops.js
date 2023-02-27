import classNames from "classnames/bind";
import styles from "./Backdrops.module.scss";

const cx = classNames.bind(styles);

function Backdrops() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vqZnytUpDDAZI6JU7WtCqdq84L.jpg"
        alt="image"
      />
    </div>
  );
}

export default Backdrops;
