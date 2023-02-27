import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./CardFilm.module.scss";
import imageNotFound from "../../../../../assets/images/image-not-found.jpg";

const cx = classNames.bind(styles);

function CardFilm({ dataCardFilm }) {
  const image = !!dataCardFilm.poster_path
    ? `https://image.tmdb.org/t/p/w500/${dataCardFilm.poster_path}`
    : imageNotFound;

  return (
    <div className={cx("card")}>
      <Link className={cx("poster")}  to={`/detail-movie/${dataCardFilm.id}`}>
        <img alt="poster" className={cx("poster-img")} src={image} />
      </Link>
      <div className={cx("details")}>
        <div className={cx("title")}>
          <h4>{dataCardFilm.original_title}</h4>
          <span className={cx("date")}>{dataCardFilm.release_date}</span>
        </div>
        <div className={cx("overview")}>
          <p>{dataCardFilm.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFilm;
