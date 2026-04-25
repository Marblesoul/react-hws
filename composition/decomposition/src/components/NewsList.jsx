/** NewsList отвечает за список новостей, собранный из повторяемых NewsItem. */
import NewsItem from './NewsItem.jsx';

const NewsList = ({ items }) => (
  <ul className="news-list">
    {items.map((item) => (
      <NewsItem key={item.href} {...item} />
    ))}
  </ul>
);

export default NewsList;
