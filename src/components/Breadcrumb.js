import React from 'react'
import { Link } from 'gatsby'
import he from "he"

const breadcrumb = {
  backgroundColor: 'white',
  border: 'rgba(174,199,66,1) solid 1px;',
  padding:'0',
  height:'20px',
}

function Breadcrumb(props) {

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <nav className="row">
      <ul className="breadcrumb ariane" style={ breadcrumb }>
        {
          props.crumbs.map((crumb, ci) => {
            const disabled = isLast(ci) ? 'disabled' : '';
            let url = crumb.url.replace(props.siteUrl,"")
            return (
              <li
                key={ ci }
                className="breadcrumb-item align-items-center"
              >
                <Link to={ url } className={ `btn-link ${ disabled }` }>
                { he.decode(crumb.text) }
                </Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

export default Breadcrumb;