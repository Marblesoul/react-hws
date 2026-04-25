/** SearchSection отвечает за логотип, категории поиска, форму и пример запроса. */
const SearchSection = ({ categories, exampleText }) => (
  <section className="search-section" aria-label="Поиск">
    <div className="search-categories">
      {categories.map((category) => (
        <a href="#search" key={category}>
          {category}
        </a>
      ))}
      <a href="#search">ещё</a>
    </div>
    <div className="search-row">
      <a className="logo" href="#home" aria-label="Яндекс">
        Яндекс
      </a>
      <form className="search-form">
        <input aria-label="Поисковый запрос" />
        <button type="submit">Найти</button>
      </form>
    </div>
    <p className="search-example">
      Найдётся всё. Например, <a href="#example">{exampleText}</a>
    </p>
  </section>
);

export default SearchSection;
