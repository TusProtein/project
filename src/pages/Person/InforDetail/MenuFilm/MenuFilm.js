import classNames from "classnames/bind";
import styles from "./MenuFilm.module.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import CardFilm from "./CardFilm/CardFilm.js";
import Menu from "../../../../components/Menu";

import { PERSON_DETAIL } from "../../../../api/url.js";
import { getData } from "../../../../api/apiHandle.js";
import imageNotFound from "../../../../assets/images/image-not-found.jpg";

const cx = classNames.bind(styles);

function MenuFilm({ title }) {

  const [listFilm, setListFilm] = useState([]);

  const params = useParams();

  const queryProfile = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
  };

  const PERSON_DETAIL_LISTFILM = PERSON_DETAIL + `/${params.idPerson}` + '/combined_credits';

  useEffect(() => {
    getData(PERSON_DETAIL_LISTFILM, queryProfile).then((res) => {
      setListFilm(res.data.cast);
    });
  }, []);

  const listFilmRender = listFilm.slice(0, 20);


  return (
    <div className={cx("wrapper")}>
      <Menu title={title}>
        {listFilmRender.map((item)=>(
          <CardFilm key={item.id} data={item} />
        ))}
      </Menu>
    </div>
  );
}

export default MenuFilm;
