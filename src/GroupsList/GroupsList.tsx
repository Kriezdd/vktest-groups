import GroupItem from "./GroupItem/GroupItem.tsx";
import "./GroupsList.scss";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";

const GroupsList = () => {
  const groups = useSelector((state: RootState) => state.groups.filteredGroups);

  return (
    <div className="groups-list">
      <h2>Список групп</h2>
      {groups.map((group) => (
        <GroupItem group={group} key={group.id}/>
      ))}
    </div>
  );
};

export default GroupsList;