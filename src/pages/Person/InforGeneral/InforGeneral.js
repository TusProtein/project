import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./InforGeneral.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faKeyboard } from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import { PERSON_DETAIL } from "../../../api/url.js";
import { getData } from "../../../api/apiHandle.js";
import imageNotFound from "../../../assets/images/image-not-found.jpg";

const cx = classNames.bind(styles);

function InforGeneral() {
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

  const image = !!profile.profile_path
    ? `https://image.tmdb.org/t/p/original/${profile.profile_path}`
    : imageNotFound;

  const gender = profile.gender === 2 ? "Male" : "Femail";


  const old = !!profile.deathday
    ? (Number(profile.deathday?.split("-")[0]) - Number(profile.birthday?.split("-")[0])) - 1
    : (new Date().getFullYear() - Number(profile.birthday?.split("-")[0])) - 1;

  console.log("old>>>", old);

  return (
    <div className={cx("infor")}>
      <img className={cx("avatar")} src={image} alt="img" />
      <FontAwesomeIcon className={cx("twitter")} icon={faTwitter} />
      <h3 className={cx("title")}>Personal Info</h3>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Known For</h4>
        <p className={cx("reply")}>{profile.known_for_department}</p>
      </div>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Known Credits</h4>
        <p className={cx("reply")}>78</p>
      </div>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Gender</h4>
        <p className={cx("reply")}>{gender}</p>
      </div>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Birthday</h4>
        <p className={cx("reply")}>{profile.birthday} {!profile.deathday && <span>({old} years old)</span>}</p>
      </div>
      {!!profile.deathday && (
        <div className={cx("infor-past")}>
          <h4 className={cx("question")}>Day of Death</h4>
          <p className={cx("reply")}>{profile.deathday} ({old} years old)</p>
        </div>
      )}
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Place of Birth</h4>
        <p className={cx("reply")}>{profile.place_of_birth}</p>
      </div>
      <div className={cx("infor-past")}>
        <h4 className={cx("question")}>Also Known As</h4>
        {profile?.also_known_as?.map((name) => (
          <p key={name} className={cx("reply")}>
            {name}
          </p>
        ))}
      </div>
      <div className={cx("btn")}>EDIT PAGE</div>
      <div className={cx("extend")}>
        <FontAwesomeIcon className={cx("extend-icon")} icon={faKeyboard} />
        <p className={cx("extend-text")}>Keyboard Shortcuts</p>
      </div>
      <div className={cx("extend")}>
        <FontAwesomeIcon
          className={cx("extend-icon")}
          icon={faExclamationCircle}
        />
        <p className={cx("extend-text")}>Report an Issue</p>
      </div>
    </div>
  );
}

export default InforGeneral;
