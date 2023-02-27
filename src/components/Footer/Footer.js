import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Button from "../Button";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("col-1")}>
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" />
          <Button profile>JOIN THE COMMUNITY</Button>
        </div>
        <div className={cx("col-2")}>
          <h3>The Basics</h3>
          <Button footer>About TMDB</Button>
          <Button footer>Contact Us</Button>
          <Button footer>Support Forums</Button>
          <Button footer>API</Button>
          <Button footer>System Status</Button>
        </div>
        <div className={cx("col-3")}>
          <h3>GET INVOLVED</h3>
          <Button footer>Contribution Bible</Button>
          <Button footer>Add New Movie</Button>
          <Button footer>Add New TV Show</Button>
        </div>
        <div className={cx("col-4")}>
          <h3>COMMUNITY</h3>
          <Button footer>Guidelines</Button>
          <Button footer>Discussions</Button>
          <Button footer>Leaderboard</Button>
          <Button footer>Twitter</Button>
        </div>
        <div className={cx("col-5")}>
          <h3>LEGAL</h3>
          <Button footer>Terms of Use</Button>
          <Button footer>API Terms of Use</Button>
          <Button footer>Support Forums</Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
