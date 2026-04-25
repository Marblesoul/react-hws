/** NewsItem отвечает за отображение одной новости с иконкой и ссылкой. */
const NewsItem = ({ icon, text, href }) => (
  <li className="news-item">
    <span className="news-icon" aria-hidden="true">
      {icon}
    </span>
    <a href={href}>{text}</a>
  </li>
);

export default NewsItem;
