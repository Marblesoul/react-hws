/** Header отвечает за верхнюю область страницы с новостями, датой и курсами. */
import CurrencyRates from './CurrencyRates.jsx';
import NewsList from './NewsList.jsx';
import NewsTabs from './NewsTabs.jsx';

const Header = ({ tabs, news, rates, date }) => (
  <header className="header">
    <div className="header-row">
      <NewsTabs tabs={tabs} activeTab={tabs[0]} />
      <time className="header-date" dateTime="2026-04-25">
        {date}
      </time>
    </div>
    <NewsList items={news} />
    <CurrencyRates rates={rates} />
  </header>
);

export default Header;
