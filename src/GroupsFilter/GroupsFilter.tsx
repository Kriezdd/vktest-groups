import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterGroups} from "../store/slices/groupsSlice.ts";
import {RootState} from "../store/store.ts";
import './GroupsFilter.scss';

const GroupsFilter = () => {
  const [filters, setFilters] = useState<Filters>({privacy: 'all', avatarColor: 'all', hasFriends: 'all'});
  const dispatch = useDispatch();
  const groups = useSelector((state: RootState) => state.groups.groups);
  console.log(filters);
  const avatarColors = new Set(groups.filter((group) => group.avatar_color).map((group) => group.avatar_color));

  useEffect(() => {
    dispatch(filterGroups(filters));
  }, [dispatch, filters]);



  return (
    <div className="filter-groups">
      <h2>Фильтр групп:</h2>
      <>
        <div className="filter-groups__select-container">
          <label htmlFor="privacySelectId">Приватность:</label>
          <select
            onChange={(e) => setFilters({...filters, privacy: e.target.value})}
            className="filter-groups__select"
            id="privacySelectId"
          >
            <option value="all">Все</option>
            <option value="public">Открытые</option>
            <option value="private">Закрытые</option>
          </select>
        </div>
        <div className="filter-groups__select-container">
          <label htmlFor="avatarColorSelectId">Цвет аватара:</label>
          <select
            className="filter-groups__select" id="avatarColorSelectId"
            onChange={(e) => {
              setFilters({...filters, avatarColor: e.target.value})}}
          >
            <option value="all">Любой</option>
            {
              Array.from(avatarColors).map((color, index) =>
                <option value={color} key={index}>{color}</option>)
            }
          </select>
        </div>
        <div className="filter-groups__select-container">
          <label htmlFor="friendsSelectId">Друзья в группе:</label>
          <select
            className="filter-groups__select" id="friendsSelectId"
            onChange={(e) => setFilters({...filters, hasFriends: e.target.value})}
          >
            <option value="all">Не важно</option>
            <option value="yes">Есть</option>
            <option value="no">Нет</option>
          </select>
        </div>
      </>
    </div>
  );
};

export default GroupsFilter;
