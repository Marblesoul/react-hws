import Collapse from './components/Collapse.jsx';

const App = () => (
  <main className="page">
    <h1>Collapse</h1>

    <Collapse>
      <p>
        Это содержимое открывается и закрывается с подписями по умолчанию:
        «Развернуть» и «Свернуть».
      </p>
    </Collapse>

    <Collapse collapsedLabel="Показать детали" expandedLabel="Скрыть детали">
      <p>
        Компонент принимает пользовательские подписи кнопки и показывает любой
        переданный JSX через props.children.
      </p>
      <ul>
        <li>Состояние хранится внутри компонента.</li>
        <li>Анимация сделана через CSS transition.</li>
      </ul>
    </Collapse>
  </main>
);

export default App;
