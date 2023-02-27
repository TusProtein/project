import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Review.module.scss";
import { MOVIE_DETAIL } from "../../../../api/url.js";
import { getData } from "../../../../api/apiHandle.js";
import imageNotFound from "../../../../assets/images/image-not-found.jpg";

const cx = classNames.bind(styles);

function Review() {
  const [listReview, setlistReview] = useState([]);

  const params = useParams();

  const queryListReview = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
  };

  const MOVIE_DETAIL_REVIEW = MOVIE_DETAIL + `/${params.idMovie}/reviews`;

  useEffect(() => {
    getData(MOVIE_DETAIL_REVIEW, queryListReview).then((res) => {
      setlistReview(res.data?.results);
    });
  }, [params]);

  const reviewRender =
    listReview[Math.floor(Math.random() * listReview.length)];

  const avatar = !!reviewRender?.author_details?.avatar_path
    ? `https://image.tmdb.org/t/p/w500/${reviewRender?.author_details?.avatar_path}`
    : imageNotFound;

  return (
    <div className={cx("content")}>
      <div className={cx("reviewer")}>
        <img className={cx("img-reviewer")} src={avatar} alt="reviewer" />
        <div className={cx("infor-review")}>
          <h3 className={cx("infor-reviewer")}>
            A review by {reviewRender?.author}
          </h3>
          <p className={cx("time")}>
            Written by {reviewRender?.author} on {reviewRender?.updated_at}
          </p>
        </div>
      </div>
      <div className={cx("review")}>
        <p>{reviewRender?.content}</p>
      </div>
    </div>
  );
}

export default Review;
