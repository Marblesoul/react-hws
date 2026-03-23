function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-btn ${selected === filter ? 'active' : ''}`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;