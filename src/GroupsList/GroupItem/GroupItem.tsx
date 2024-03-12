import {useState} from "react";
import {pluralize} from "../../helpers/Pluralize.ts";
import FriendsBlock from "./FriendsBlock/FriendsBlock.tsx";
import './GroupItem.scss'

interface GroupItemProps {
  group: Group;
}

const GroupItem = ({group}: GroupItemProps) => {
  const [isShowFriends, setIsShowFriends] = useState(false);

  return (
    <div className="group-item">
      <div className="group-item__avatar" style={{backgroundColor: group.avatar_color}}></div>
      <div className="group-item__info">
        <h3 className="group-item__name">{group.name}</h3>
        <p className="group-item__status">{group.closed ? "Закрытая группа" : "Открытая группа"}</p>
        <div className="group-item__members">
          <p>{pluralize(group.members_count, "человек", "человека", "человек")}</p>
          {
            group.friends && (
              <p
                className="group-item__friends"
                onClick={() => setIsShowFriends(!isShowFriends)}
              >
                ({pluralize(group.friends.length, "друг", "друга", "друзей")})
              </p>
            )
          }
        </div>
      </div>
      {isShowFriends && group.friends && <FriendsBlock friends={group.friends}/>}
    </div>
  );
};

export default GroupItem;