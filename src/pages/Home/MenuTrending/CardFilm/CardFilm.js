import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./CardFilm.module.scss";

const cx = classNames.bind(styles);

function CardFilm({ dataCardFilm }) {
  const image = `https://image.tmdb.org/t/p/original/${dataCardFilm.poster_path}`
  const rate = Math.round(dataCardFilm.vote_average * 10)
  return (
    <div className={cx("wrapper")}>
      <Link to={`/detail-movie/${dataCardFilm.id}`}><img className={cx("image")} src={image} alt="img" /></Link>
      <div className={cx("rate")}>{rate}%</div>
      <span className={cx("name")}>{dataCardFilm.original_title||dataCardFilm.name}</span>
      <span className={cx("time-release")}>{dataCardFilm.release_date||dataCardFilm.first_air_date}</span>
    </div>
  );
}

export default CardFilm;
