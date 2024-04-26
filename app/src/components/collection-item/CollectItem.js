import "./style.css"

function CollectItem(props) {
    return (
        <div className="collection-item">
            <a href={props.path} className="collection-link">
                <img className="collection-img" src={props.src} alt={props.name}></img>
                <p>{props.name}</p>
            </a>
        </div>
    );
}

export default CollectItem;