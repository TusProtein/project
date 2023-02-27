import classNames from "classnames/bind";
import styles from "./SubMenu.module.scss";
import { useState } from "react";
const cx = classNames.bind(styles);

function SubMenu({ data, onClick }) {
  const [select, setSelect] = useState(data[0].key);

  const handleClick = (id) => {
    setSelect(id);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        {data.map((item, index) => {
          const isActive = select === item.key;
          return (
            <div
              key={index}
              className={cx("item", { isActive })}
              onClick={() => {
                onClick(item.key);
                handleClick(item.key);
              }}
            >
              {item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SubMenu;
