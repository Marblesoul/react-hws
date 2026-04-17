import MessageHistory from './components/MessageHistory';
import messages from './data';
import './App.css';

const App = () => (
  <div className="clearfix container">
    <div className="chat">
      <div className="chat-history">
        <MessageHistory list={messages} />
      </div>
    </div>
  </div>
);

export default App;
