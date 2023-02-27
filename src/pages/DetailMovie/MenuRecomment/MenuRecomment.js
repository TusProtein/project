import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./MenuRecomment.module.scss";
import Menu from "../../../components/Menu";
import RecommentCard from "./RecommentCard";
import { MOVIE_DETAIL } from "../../../api/url.js";
import { getData } from "../../../api/apiHandle.js";

const cx = classNames.bind(styles);

function MenuRecomment({ title }) {
  const [listRecomment, setListRecomment] = useState([]);

  const params = useParams();

  const queryListRecomment = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
  };

  const MOVIE_DETAIL_RECOMMENT = MOVIE_DETAIL + `/${params.idMovie}/similar`;

  useEffect(() => {
    getData(MOVIE_DETAIL_RECOMMENT, queryListRecomment).then((res) => {
      setListRecomment(res.data.results);
    });
  }, [params]);

  return (
    <Menu className={cx("wrapper")} title={title}>
      {listRecomment?.map((item) => (
        <RecommentCard key={item.id} dataRender={item} />
      ))}
    </Menu>
  );
}

export default MenuRecomment;
