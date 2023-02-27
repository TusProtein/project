import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuContent from "./components/MenuContent/MenuContent";
import MenuQuantity from "./components/MenuQuantity";
import styles from "./Search.module.scss";

import {getData} from '../../api/apiHandle.js'
import {
  SEARCH_MOVIES,
  SEARCH_TV_SHOWS,
  SEARCH_PEOPLES,
  SEARCH_COMPANIES,
  SEARCH_COLLECTIONS,
  SEARCH_KEYWORDS,
} from "../../api/url";

const cx = classNames.bind(styles);

function Search() {

  const params = useParams();

  const [moviesResult, setMoviesResult] = useState([])
  const [tvResult, setTvResult] = useState([])
  const [peoplesResult, setPeoplesResult] = useState([])
  const [companiesResult, setCompaniesResult] = useState([])
  const [collectionsResult, setCollectionsResult] = useState([])
  const [keywordsResult, setKeywordsResult] = useState([])

  const querySearchValue = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
    query: params.searchValue,
    page: 1,
  }

  useEffect(() => {
    getData(SEARCH_MOVIES, querySearchValue).then((res) => {
      setMoviesResult(res.data);
    })
    getData(SEARCH_TV_SHOWS, querySearchValue).then((res) => {
      setTvResult(res.data);
    })
    getData(SEARCH_PEOPLES, querySearchValue).then((res) => {
      setPeoplesResult(res.data);
    })
    getData(SEARCH_COMPANIES, querySearchValue).then((res) => {
      setCompaniesResult(res.data);
    })
    getData(SEARCH_COLLECTIONS, querySearchValue).then((res) => {
      setCollectionsResult(res.data);
    })
    getData(SEARCH_KEYWORDS, querySearchValue).then((res) => {
      setKeywordsResult(res.data);
    })
  }, []);

  const quantity = {
    quantityMovies: moviesResult.total_results,
    quantityTv: tvResult.total_results,
    quantityPeople: peoplesResult.total_results,
    quantityCompanies: companiesResult.total_results,
    quantityCollections: collectionsResult.total_results,
    quantityKeywords: keywordsResult.total_results
  }

  return (
    <div className={cx("wrapper")}>
      <MenuQuantity data={quantity}/>
      <MenuContent/>
    </div>
  );
}

export default Search;
