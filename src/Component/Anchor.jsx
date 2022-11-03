const Anchor = ({links, title, id, subtext }) => {
    return(
        <div className="anchor" title={subtext}>
            <a href={links}>
            <button id={id}>
           <span className="title">
           {title}
            </span>
            </button>
            </a>
        </div>
    )
}

export default Anchor