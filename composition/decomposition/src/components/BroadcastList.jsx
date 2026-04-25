/** BroadcastList отвечает за список эфирных трансляций. */
const BroadcastList = ({ items }) => (
  <ul className="plain-list">
    {items.map(({ title, channel }) => (
      <li key={title}>
        <span className="play-icon" aria-hidden="true">
          ▶
        </span>
        <a href="#broadcast">{title}</a>
        <span className="muted"> {channel}</span>
      </li>
    ))}
  </ul>
);

export default BroadcastList;
