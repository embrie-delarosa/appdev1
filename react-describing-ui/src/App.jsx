import './App.css';
import Gallery from './Gallery.jsx';
import LamarrToDo from './LamarrToDo.jsx';
import ZaraToDo from './ZaraToDo.jsx';
import Profile from './Profile.jsx';
import SaruhashiProfile from './Saruhashi.jsx';
import PackingList from './PackingList.jsx';
import DataList from './DataList.jsx';
import TeaCup from './TeaCup.jsx';
import RootComponent from './RootComponent.jsx';
import RootModule from './RootModule.jsx';

export default function App() {
  return (
    <div className="App">
      <Gallery />
      <LamarrToDo />
      <ZaraToDo />
      <Profile />
      <SaruhashiProfile />
      <PackingList />
      <DataList />
      <TeaCup />
      <RootComponent />
      <RootModule />
    </div>
  );
}
