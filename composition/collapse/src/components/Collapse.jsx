import { useState } from 'react';

const Collapse = ({
  collapsedLabel = 'Развернуть',
  expandedLabel = 'Свернуть',
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="collapse">
      <button className="btn" type="button" onClick={() => setIsExpanded((value) => !value)}>
        {isExpanded ? expandedLabel : collapsedLabel}
      </button>
      <div className={isExpanded ? 'collapse-content expanded' : 'collapse-content'}>
        <div className="collapse-body">{children}</div>
      </div>
    </section>
  );
};

export default Collapse;
