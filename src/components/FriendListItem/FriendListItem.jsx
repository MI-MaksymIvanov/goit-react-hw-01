import style from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  let status = isOnline ? "Online" : "Offline";
  return (
    <li className={style.friendListItem}>
      <img className={style.friendImg} src={avatar} alt={name} width="48" />
      <p className={style.friendName}>{name}</p>
      <p
        className={clsx(
          style.friendStatus,
          isOnline && style.isOnline,
          !isOnline && style.isOffline
        )}
      >
        {status}
      </p>
    </li>
  );
}
