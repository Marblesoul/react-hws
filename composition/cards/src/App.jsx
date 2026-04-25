import cardImage from '../assets/card1.png';
import Card from './components/Card.jsx';

const App = () => (
  <main className="cards-page">
    <Card imageSrc={cardImage} imageAlt="Абстрактная иллюстрация для карточки">
      <h2 className="card-title">Card title</h2>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card&apos;s content.
      </p>
      <a className="btn" href="#details">
        Go somewhere
      </a>
    </Card>

    <Card>
      <h2 className="card-title">Special title treatment</h2>
      <p className="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a className="btn" href="#more">
        Go somewhere
      </a>
    </Card>
  </main>
);

export default App;
