import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ outline = false, children, ...passProps }) {
  let Component = "button";

  const classes = cx("wrapper", {
    outline,
    ...passProps,
  });

  console.log(classes);

  return (
    <Component className={classes}>
      <span>{children}</span>
    </Component>
  );
}

export default Button;
