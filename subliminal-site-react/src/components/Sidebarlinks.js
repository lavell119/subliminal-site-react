import react from 'react';
import { useState } from 'react'


function Sidebarlinks() {

  const [links, setLinks] = useState(
    ["Business and Finance", "Health", "Love and Romance", "Physical Changes", "Mental Health", "Self Improvement"]
  )

  return (
    <div className="sidebar_links">
      {links.map((link, index) =>
      <div className= "link" key={ index}><a href={`/categories/${link}`}>{link}</a></div>
      )
      }
    </div>
  );
}

export default Sidebarlinks;