import classNames from "classnames/bind";
import styles from "./MostPopular.module.scss";

const cx = classNames.bind(styles);

function MostPopular() {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/6al048Lat3eLVQOuKtc9h6Tu94d.jpg"
        alt="image"
      />
    </div>
  );
}

export default MostPopular;
