import classNames from "classnames/bind";
import styles from "./Person.module.scss";
import InforGeneral from "./InforGeneral";
import InforDetail from "./InforDetail";

const cx = classNames.bind(styles);

function Person() {
  return (
    <div className={cx("wrapper")}>
      <InforGeneral/>
      <InforDetail/>
    </div>
  );
}

export default Person;
