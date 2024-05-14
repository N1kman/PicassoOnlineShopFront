import "./products.css"
import { FaChartGantt } from "react-icons/fa6";
import { TbHeartCheck } from "react-icons/tb";

function saveToBasket(product) {
    const products = JSON.parse(localStorage.getItem('basket')) ?? []
    if (!products.find(elem => elem.id === product.id)) {
        products.push(product)
        localStorage.setItem('basket', JSON.stringify(products))
    }
}

function removeFromBasket(product) {
    let products = JSON.parse(localStorage.getItem('basket')) ?? []
    products = products.filter(elem => elem.id !== product.id)
    localStorage.setItem('basket', JSON.stringify(products))
}

function Product({ elem, isBasket, setMinus }) {

    function handleAddToBasket() {
        if (isBasket) {
            removeFromBasket(elem)
            setMinus()
        } else {
            saveToBasket(elem)
        }
    }

    return (
        <div className="product__element">
            <a href="#">
                <img className="product__image" src={`http://localhost:8080/products/image/${elem.id}`} alt={elem.name}></img>
            </a>

            <div className="product__info">
                <a href="#">
                    <h3 className="product__name">{elem.name}</h3>
                </a>
                <span>{elem.price + " руб"}</span>
            </div>

            <div className="product__options">
                <button className="product__basket" onClick={handleAddToBasket}>{isBasket ? 'Удалить' : 'В корзину'}</button>
                <FaChartGantt className="header__compare" />
                <TbHeartCheck className="header__favorites" />
            </div>
        </div>
    );
}

export default Product;