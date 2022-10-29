

const Anchor = ({links, title, id, subtext }) => {
    return(
        <div className="anchor">
            <a href={links}>
            <button id={id}>
           <span className="title">
           {title}
            </span>
            <div>{subtext}</div>
            </button>
            </a>
        </div>
    )
}

export default Anchor