import "./productPage.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function getProduct(id) {
    const { data } = await axios.get('http://localhost:8080/products/' + id)
    return data
}

function ProductPage() {

    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {
        async function fetchProduct() {
            setProduct(await getProduct(id))
        }
        fetchProduct()
    }, [id])

    return (
        <div className="containter__product-full">
            <div className="product__full">
                <button onClick={() => window.history.back()} className="product__back">Вернуться</button>

                <div className="product__full-info">
                    <img className="product__full-image" src={`http://localhost:8080/products/image/${product.id}`} alt={product.name} ></img>
                </div>

                <div className="product__table">
                    <h3 className="product__full-name">{product.name}</h3>
                    <p className="product__full-description">{product.description}</p>
                    <span className="product__full-price">{product.price + " руб"}</span>
                </div>

            </div>
        </div>
    );
}

export default ProductPage;