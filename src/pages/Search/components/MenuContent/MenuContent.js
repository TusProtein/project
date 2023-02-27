import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./MenuContent.module.scss";
import CardFilm from "./CardFilm/CardFilm";

import { getData } from "../../../../api/apiHandle.js";

import { SEARCH_MOVIES } from "../../../../api/url";

const cx = classNames.bind(styles);

function MenuContent() {
  const [listRender, setListRender] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const params = useParams();

  const querySearchValue = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
    query: params.searchValue,
    page: currentPage,
  };

  useEffect(() => {
    getData(SEARCH_MOVIES, querySearchValue).then((res) => {
      setListRender(res.data);
    });
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < listRender.total_pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        {listRender.results?.map((item) => (
          <CardFilm key={item.id} dataCardFilm={item} />
        ))}
      </div>
      <div className={cx("change-page")}>
        <button className={cx("btn")} onClick={handlePrevPage}>
          Prev page
        </button>
        <span className={cx("page-number")}>
          {currentPage}/{listRender.total_pages}
        </span>
        <button className={cx("btn")} onClick={handleNextPage}>
          Next page
        </button>
      </div>
    </div>
  );
}

export default MenuContent;
