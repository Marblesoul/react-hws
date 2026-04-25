/** VisitedLinks отвечает за список популярных посещаемых ссылок. */
const VisitedLinks = ({ items }) => (
  <ul className="plain-list">
    {items.map(({ title, text }) => (
      <li key={title}>
        <a href="#visited">
          <b>{title}</b> — {text}
        </a>
      </li>
    ))}
  </ul>
);

export default VisitedLinks;
