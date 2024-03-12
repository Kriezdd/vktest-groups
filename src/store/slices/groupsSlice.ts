import { createSlice } from '@reduxjs/toolkit';
import mockGroups from '../../mock/groups.json';

const initialState: {groups: Group[], filteredGroups: Group[]} = {
  groups: [...mockGroups],
  filteredGroups: [],
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    setGroups: (state, action) => {
      state.groups = action.payload;
    },
    setFilteredGroups: (state, action) => {
      state.filteredGroups = action.payload;
    },
    filterGroups: (state, action) => {
      const { privacy, avatarColor, hasFriends } = action.payload;
      state.filteredGroups = state.groups.filter(group => {

        if (avatarColor !== 'all' && group.avatar_color !== avatarColor) {
          return false;
        }

        if (privacy !== 'all' && group.closed == (privacy === 'public')) {
          return false;
        }

        // Проверка наличия друзей
        if (hasFriends !== 'all') {
          const hasFriendsGroup = group.friends && group.friends.length > 0;
          if ((hasFriends === 'yes' && !hasFriendsGroup) || (hasFriends === 'no' && hasFriendsGroup)) {
            return false;
          }
        }

        // Если группа прошла все проверки, она соответствует фильтрам
        return true;

        }
      );
    }
  },
});

export const { setGroups, setFilteredGroups, filterGroups } = groupsSlice.actions;

export default groupsSlice.reducer;