import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import SubMenu from "../SubMenu";

const cx = classNames.bind(styles);

function Menu({ children, title = "", subMenu = [], onClick }) {
  const isSubMenuEmpty = subMenu.length === 0 ? true : false;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <h3 className={cx("title")}>{title}</h3>
        {!isSubMenuEmpty && <SubMenu data={subMenu} onClick={onClick} />}
      </div>
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default Menu;
