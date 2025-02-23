import style from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map((friend) => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}
