import react from 'react';
import { useState } from 'react'


function Sidebarlinks() {

  const [links, setLinks] = useState(
    ["Health", "Powers", "Looks", "Brain", "Leisure"]
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