import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import userData from "./data/userData.json";
import friendsData from "./data/friendsData.json";
import transacions from "./data/transactionsData.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transacions} />
    </>
  );
}
