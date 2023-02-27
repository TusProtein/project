import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./ActorCard.module.scss";
import imageNotFound from "../../../../assets/images/image-not-found.jpg";

const cx = classNames.bind(styles);

function ActorCard({ dataRender }) {
  const image = !!dataRender.profile_path
    ? `https://image.tmdb.org/t/p/w500/${dataRender.profile_path}`
    : imageNotFound;

  return (
    <div className={cx("wrapper")}>
      <Link to={`/person/${dataRender.id}`}>
        <img className={cx("image")} src={image} alt="img" />
      </Link>
      <span className={cx("name")}>{dataRender.name}</span>
      <span className={cx("role")}>{dataRender.character}</span>
    </div>
  );
}

export default ActorCard;
