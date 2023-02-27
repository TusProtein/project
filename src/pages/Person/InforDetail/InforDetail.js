import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./InforDetail.module.scss";
import MenuFilm from "./MenuFilm";

import { PERSON_DETAIL } from "../../../api/url.js";
import { getData } from "../../../api/apiHandle.js";

const cx = classNames.bind(styles);

function InforDetail() {
  const [profile, setProfile] = useState({});

  const params = useParams();

  const queryProfile = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
  };

  const PERSON_DETAIL_PROFILE = PERSON_DETAIL + `/${params.idPerson}`;

  useEffect(() => {
    getData(PERSON_DETAIL_PROFILE, queryProfile).then((res) => {
      setProfile(res.data);
    });
  }, []);


  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("name")}>{profile.name}</h1>
      <h3 className={cx("title-bio")}>Biography</h3>
      <p className={cx("bio")}>
        {profile.biography}
      </p>
      <MenuFilm title="Known For" />
    </div>
  );
}

export default InforDetail;
