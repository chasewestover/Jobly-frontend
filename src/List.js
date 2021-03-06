import CompanyCard from './CompanyCard';
import JobCard from './JobCard';
import { useState } from 'react';

function List({ list, type, other, iPerPg=20 }) {

  const [page, setPage] = useState(1);

  

  return (
    <div>
      <div className="List">
        {list.slice((page - 1) * iPerPg, page * iPerPg).map(l =>  type === "company" 
          ? (<CompanyCard key={l.handle} {...l} />) 
          : (<JobCard key={l.id} {...l} apps={other} />)
        )}
      </div>
        <div>
          {page > 1 && <button
              className="btn btn-secondary"
              onClick={() => setPage(p => p - 1)}>
              Back
            </button>}
          <span>Page {page}</span>
          {page * 20 <= list.length && <button
            className="btn btn-secondary"
            onClick={() => setPage(p => p + 1)}>
            Forward
            </button>}
      </div>
    </div>
  );
}
export default List;