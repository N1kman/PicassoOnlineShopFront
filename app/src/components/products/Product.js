import "./products.css"
import { FaChartGantt } from "react-icons/fa6";
import { TbHeartCheck } from "react-icons/tb";

function Product({ elem }) {
    return (
        <div className="product__element">
            <a href="#">
                <img className="product__image" src={`http://localhost:8080/products/image/${elem.id}`} alt={elem.name}></img>
            </a>

            <a href="#">
                <h3>{elem.name}</h3>
            </a>

            <span>{elem.price + " руб"}</span>
            <div className="product__options">
                <button className="product__basket">В корзину</button>
                <FaChartGantt className="header__compare" />
                <TbHeartCheck className="header__favorites" />
            </div>
        </div>
    );
}

export default Product;