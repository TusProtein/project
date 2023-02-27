import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./TitleMovie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHeart,
  faList,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { MOVIE_DETAIL } from "../../../api/url";
import { getData } from "../../../api/apiHandle.js";
import imageNotFound from "../../../assets/images/image-not-found.jpg";

const cx = classNames.bind(styles);

function TitleMovie() {
  const params = useParams();

  const [detailMovie, setDetailMovie] = useState({});

  const queryDetailMovie = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
  };

  const MOVIE_DETAIL_URL = MOVIE_DETAIL + `/${params.idMovie}`;

  useEffect(() => {
    getData(MOVIE_DETAIL_URL, queryDetailMovie).then((res) => {
      setDetailMovie(res.data);
    });
  }, [params]);

  const image = !!detailMovie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`
    : imageNotFound;

  const runtimeHour = Math.floor(detailMovie.runtime / 60);

  const runtimeMinute = detailMovie.runtime % 60;

  const genresArr = detailMovie?.genres?.map((genre) => genre.name);

  const genres = genresArr?.join(", ");

  const rate = Math.round(detailMovie.vote_average * 10);

  return (
    <div
      className={cx("wrapper")}
      style={{
        backgroundImage: `url(https://www.themoviedb.org/t/p/original/${detailMovie.backdrop_path})`,
      }}
    >
      <div className={cx("content")}>
        <div className={cx("poster")}>
          <img className={cx("img-poster")} src={image} title="poster" />
          <div className={cx("offer")}></div>
        </div>
        <div className={cx("inforMovie")}>
          <div className={cx("title")}>
            <h2 className={cx("name")}>{detailMovie.original_title}</h2>
            <div className={cx("type")}>
              <span className={cx("type-age")}>PG-13</span>
              <span>{detailMovie.release_date}</span>
              <span>{genres}</span>
              <span>
                {runtimeHour}h {runtimeMinute}m
              </span>
            </div>
          </div>
          <div className={cx("actions")}>
            <div className={cx("user-rate")}>
              <div className={cx("rate")}>{rate}%</div>
              <div className={cx("title-rate")}>User Score</div>
            </div>
            <div className={cx("action-item")}>
              <FontAwesomeIcon icon={faList} />
            </div>
            <div className={cx("action-item")}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className={cx("action-item")}>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
            <div className={cx("action-item")}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={cx("play-trailer")}>
              <FontAwesomeIcon icon={faPlay} />
              <span className={cx("play")}>Play Trailer</span>
            </div>
          </div>
          <div className={cx("overview")}>
            <p className={cx("overview-tagline")}>{detailMovie.tagline}</p>
            <h3 className={cx("overview-title")}>Overview</h3>
            <p className={cx("overview-content")}>{detailMovie.overview}</p>
            <div className={cx("overview-product")}>
              <div className={cx("element")}>
                <p className={cx("name-productor")}>Sam Raimi</p>
                <p className={cx("position")}>Director</p>
              </div>
              <div className={cx("element")}>
                <p className={cx("name-productor")}>Sam Raimi</p>
                <p className={cx("position")}>Director</p>
              </div>
              <div className={cx("element")}>
                <p className={cx("name-productor")}>Sam Raimi</p>
                <p className={cx("position")}>Director</p>
              </div>
              <div className={cx("element")}>
                <p className={cx("name-productor")}>Sam Raimi</p>
                <p className={cx("position")}>Director</p>
              </div>
              <div className={cx("element")}>
                <p className={cx("name-productor")}>Sam Raimi</p>
                <p className={cx("position")}>Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleMovie;
