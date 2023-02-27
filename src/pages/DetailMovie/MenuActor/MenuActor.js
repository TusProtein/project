import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MOVIE_DETAIL } from "../../../api/url.js";
import { getData } from "../../../api/apiHandle.js";
import styles from "./MenuActor.module.scss";
import ActorCard from "./ActorCard";
import Menu from "../../../components/Menu";

const cx = classNames.bind(styles);

function MenuActor({ title }) {
  const [listActor, setListActor] = useState([]);

  const params = useParams();

  const queryListActor = {
    api_key: "f9ad526c156fbf78323d55224f4fe4b4",
  };

  const MOVIE_DETAIL_LISTACTOR = MOVIE_DETAIL + `/${params.idMovie}/casts`;

  useEffect(() => {
    getData(MOVIE_DETAIL_LISTACTOR, queryListActor).then((res) => {
      setListActor(res.data.cast);
    });
  }, [params]);

  const listActorRender = listActor.slice(0, 20);

  return (
    <div className={cx("wrapper")}>
      <Menu title={title}>
        {listActorRender?.map((item) => (
          <ActorCard key={item.id} dataRender={item} />
        ))}
      </Menu>
      <h3 className={cx("extend")}>Full Cast & Crew</h3>
    </div>
  );
}

export default MenuActor;
