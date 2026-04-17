import Stars from './components/Stars';
import './App.css';

const App = () => (
  <div className="demo">
    <div className="demo-row">
      <span className="label">count={1}</span>
      <Stars count={1} />
    </div>
    <div className="demo-row">
      <span className="label">count={3}</span>
      <Stars count={3} />
    </div>
    <div className="demo-row">
      <span className="label">count={5}</span>
      <Stars count={5} />
    </div>
    <div className="demo-row">
      <span className="label">count={0}</span>
      <Stars count={0} />
    </div>
    <div className="demo-row">
      <span className="label">count={6}</span>
      <Stars count={6} />
    </div>
    <div className="demo-row">
      <span className="label">count=NaN</span>
      <Stars count={NaN} />
    </div>
  </div>
);

export default App;
