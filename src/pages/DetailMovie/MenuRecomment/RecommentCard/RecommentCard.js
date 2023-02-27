import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./RecommentCard.module.scss";
import imageNotFound from "../../../../assets/images/image-not-found.jpg";

const cx = classNames.bind(styles);

function ActorCard({ dataRender }) {
  const image = !!dataRender.backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${dataRender.backdrop_path}`
    : imageNotFound;

  const rate = Math.round(dataRender.vote_average * 10);

  return (
    <div className={cx("wrapper")}>
      <Link className={cx("poster")}  to={`/detail-movie/${dataRender.id}`}>
        <img className={cx("image")} src={image} alt="img" />
      </Link>
      <div className={cx("infor")}>
        <span className={cx("name")}>{dataRender.original_title}</span>
        <span className={cx("rate")}>{rate}%</span>
      </div>
    </div>
  );
}

export default ActorCard;
