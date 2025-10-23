import './App.css';
import Gallery from './Gallery.jsx';
import LamarrToDo from './LamarrToDo.jsx';
import ZaraToDo from './ZaraToDo.jsx';
import Profile from './Profile.jsx';
import SaruhashiProfile from './Saruhashi.jsx';

export default function App() {
  return (
    <div className="App">
      <Gallery />
      <LamarrToDo />
      <ZaraToDo />
      <Profile />
      <SaruhashiProfile />
    </div>
  );
}
