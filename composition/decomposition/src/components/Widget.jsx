/** Widget отвечает за универсальный контейнер нижнего информационного блока. */
const Widget = ({ title, children }) => (
  <section className="widget">
    <h2>{title}</h2>
    {children}
  </section>
);

export default Widget;
