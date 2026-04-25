/** TVProgram отвечает за расписание телепередач. */
const TVProgram = ({ items }) => (
  <ul className="program-list">
    {items.map(({ time, title, channel }) => (
      <li key={`${time}-${title}`}>
        <time>{time}</time>
        <a href="#tv">{title}</a>
        <span>{channel}</span>
      </li>
    ))}
  </ul>
);

export default TVProgram;
