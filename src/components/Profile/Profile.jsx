import style from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={style.profileWrapper}>
      <div className={style.profileImgWrapper}>
        <img className={style.profileImg} src={image} alt="User avatar" />
        <p className={style.userName}>{name}</p>
        <p className={style.userInfo}>@{tag}</p>
        <p className={style.userInfo}>{location}</p>
      </div>

      <ul className={style.profileList}>
        <li className={style.profileItem}>
          <span className={style.profileItemTitle}>Followers</span>
          <span className={style.profileItemInfo}>{followers}</span>
        </li>
        <li className={style.profileItem}>
          <span className={style.profileItemTitle}>Views</span>
          <span className={style.profileItemInfo}>{views}</span>
        </li>
        <li className={style.profileItem}>
          <span className={style.profileItemTitle}>Likes</span>
          <span className={style.profileItemInfo}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
