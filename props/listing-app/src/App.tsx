import Listing from './components/Listing';
import items from './data';
import './App.css';

const App = () => (
  <div className="wrapper">
    <Listing items={items} />
  </div>
);

export default App;
