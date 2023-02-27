import classNames from "classnames/bind";
import styles from "./CardFilm.module.scss";
import imageNotFound from "../../../../../assets/images/image-not-found.jpg";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function CardFilm({ data }) {
  const image = !!data.poster_path
    ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
    : imageNotFound;

  return (
    <div className={cx("wrapper")}>
      <img className={cx("image")} src={image} alt="img" />
      <Link to={`/detail-movie/${data.id}`}>
        <span className={cx("name")}>{data.original_title}</span>
      </Link>
    </div>
  );
}

export default CardFilm;
