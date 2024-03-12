import GroupsFilter from "./GroupsFilter/GroupsFilter.tsx";
import GroupsList from "./GroupsList/GroupsList.tsx";
import './App.scss'

function App() {
  return (
    <div className="app">
      <GroupsFilter />
      <GroupsList />
    </div>
  )
}

export default App
