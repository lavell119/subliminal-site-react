import react from 'react';
import { useState } from 'react'


function Sidebarlinks() {

  const [links, setLinks] = useState(
    ["Link1", "Link2", "Link3", "Link4", "Link5", "Link6", "Link7"]
  )

  return (
    <div className="sidebar_links">
      {links.map((link, index) =>
      <div className= "link" key={ index}>{link}</div>
      )
      }
    </div>
  );
}

export default Sidebarlinks;