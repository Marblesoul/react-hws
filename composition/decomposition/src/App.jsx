import BroadcastList from './components/BroadcastList.jsx';
import Header from './components/Header.jsx';
import MapWidget from './components/MapWidget.jsx';
import PromoBanner from './components/PromoBanner.jsx';
import SearchSection from './components/SearchSection.jsx';
import TVProgram from './components/TVProgram.jsx';
import VisitedLinks from './components/VisitedLinks.jsx';
import WeatherWidget from './components/WeatherWidget.jsx';
import Widget from './components/Widget.jsx';
import WidgetsGrid from './components/WidgetsGrid.jsx';
import {
  broadcasts,
  newsItems,
  newsTabs,
  rates,
  searchCategories,
  tvProgram,
  visitedLinks,
} from './data.js';

const App = () => (
  <main className="page">
    <div className="top-layout">
      <Header
        tabs={newsTabs}
        news={newsItems}
        rates={rates}
        date="25 апреля, суббота 16:32"
      />
      <PromoBanner
        compact
        image="🚀"
        title="Работа над ошибками"
        text="Смотрите подборку задач и решений в учебном сервисе."
      />
    </div>

    <SearchSection categories={searchCategories} exampleText="фаза луны сегодня" />

    <PromoBanner
      image="🎬"
      title="Форсаж: Хоббс и Шоу"
      text="Новый трейлер, рецензии и расписание ближайших сеансов."
    />

    <WidgetsGrid>
      <Widget title="Погода">
        <WeatherWidget temperature="+17°" morning="+17" day="+20" />
      </Widget>

      <Widget title="Посещаемое">
        <VisitedLinks items={visitedLinks} />
      </Widget>

      <Widget title="Карта Германии">
        <MapWidget />
      </Widget>

      <Widget title="Телепрограмма">
        <TVProgram items={tvProgram} />
      </Widget>

      <Widget title="Эфир">
        <BroadcastList items={broadcasts} />
      </Widget>
    </WidgetsGrid>
  </main>
);

export default App;
