/** NewsTabs отвечает за переключатели тематик новостного блока. */
const NewsTabs = ({ tabs, activeTab }) => (
  <nav className="news-tabs" aria-label="Разделы новостей">
    {tabs.map((tab) => (
      <a className={tab === activeTab ? 'news-tab active' : 'news-tab'} href="#news" key={tab}>
        {tab}
      </a>
    ))}
  </nav>
);

export default NewsTabs;
