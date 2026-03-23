import { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';



function Portfolio() {
    
    const [filter, setFilter] = useState('All');
    

  return (
    <div className="portfolio-content">
        <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected={filter}
            onSelectFilter={setFilter}
        />
        <ProjectList filter={filter} />
    </div>
  );
}

export default Portfolio;