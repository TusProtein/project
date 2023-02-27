import classNames from "classnames/bind";
import styles from "./DetailMovie.module.scss";

import TitleMovie from "./TitleMovie";
import MenuActor from "./MenuActor";
import Social from "./Social";
import Media from "./Media/Media.js";
import Collection from "./Collection";
import MenuRecomment from "./MenuRecomment";

const cx = classNames.bind(styles);

function DetailMovie() {

  return (
    <div className={cx("wrapper")}>
      <TitleMovie />
      <div className={cx("inforMovie")}>
        <div className={cx("content")}>
          <MenuActor title="Top Billed Cast" />
          <Social title="Social" />
          <Media title="Media" />
          <Collection />
          <MenuRecomment title="Recommendations" />
        </div>
      </div>
    </div>
  );
}

export default DetailMovie;
