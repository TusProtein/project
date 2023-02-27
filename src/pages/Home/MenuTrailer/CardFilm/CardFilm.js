import classNames from "classnames/bind";
import styles from "./CardFilm.module.scss";

const cx = classNames.bind(styles);

function CardFilm({ data }) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("image")} src={data.img} alt="img" />
      <div className={cx("rate")}>{data.rate}%</div>
      <span className={cx("name")}>{data.name}</span>
      <span className={cx("time-release")}>{data.release}</span>
    </div>
  );
}

export default CardFilm;
