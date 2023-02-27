import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Home.module.scss";
import HeaderHome from "./HeaderHome";
import MenuTrending from "./MenuTrending/MenuTrending.js";
import MenuTrailer from "./MenuTrailer/MenuTrailer.js";
import MenuPopular from "./MenuPopular";
import LeaderBoard from "./LeaderBoard";

import { getData } from "../../api/apiHandle.js";
import {
  TRENDING_DAY_URL,
  TRENDING_WEEK_URL,
  POPULAR_THEATERS,
  POPULAR_TV,
} from "../../api/url.js";

const cx = classNames.bind(styles);

function Home() {
  const [listMovieTrendingDay, setListMovieTrendingDay] = useState([]);
  const [listMovieTrendingWeek, setListMovieTrendingWeek] = useState([]);
  const [listMoviePopularTv, setlistMoviePopularTv] = useState([]);
  const [listMoviePopularTheaters, setlistMoviePopularTheaters] = useState([]);

  const queryOjbTrending = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
    page: 1,
  };
  const queryOjbPopular = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
    page: 1,
  };

  useEffect(() => {
    const promise1 = getData(TRENDING_DAY_URL, queryOjbTrending);
    const promise2 = getData(TRENDING_WEEK_URL, queryOjbTrending);
    const promise3 = getData(POPULAR_THEATERS, queryOjbPopular);
    const promise4 = getData(POPULAR_TV, queryOjbPopular);
    Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
      setListMovieTrendingDay(values[0].data.results);
      setListMovieTrendingWeek(values[1].data.results);
      setlistMoviePopularTv(values[2].data.results);
      setlistMoviePopularTheaters(values[3].data.results);
    });
  }, []);

  const listFilmTrending = [listMovieTrendingDay, listMovieTrendingWeek];
  const listFilmPopular = [listMoviePopularTv, listMoviePopularTheaters];
  return (
    <div className={cx("wrapper")}>
      <HeaderHome />
      <MenuTrending title="Trending" dataRender={listFilmTrending} />
      <MenuTrailer title="Latest Trailers" />
      <MenuPopular title="What's Popular" dataRender={listFilmPopular} />
      <LeaderBoard title="Leaderboard" />
    </div>
  );
}

export default Home;
