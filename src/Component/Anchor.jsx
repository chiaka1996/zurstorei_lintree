import { Link } from "react-router-dom";

const Anchor = ({links, title, id, subtext }) => {
    return(
        <div className="anchor" title={subtext}>
          {title === 'Contact Me' ? <Link to={links}>
            <button id={id}>
           <span className="title">
           {title}
            </span>
            </button>
            </Link> : <a href={links}>
            <button id={id}>
           <span className="title">
           {title}
            </span>
            </button>
            </a>  }
        </div>
    )
}

export default Anchor;