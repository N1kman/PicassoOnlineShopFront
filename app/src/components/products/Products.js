import "./products.css"
import getProducts from "./getProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function Products() {

    const [products, setProduts] = useState([])

    const { category } = useParams()

    const [basketCount, setBasketCount] = useState(JSON.parse(localStorage.getItem('basket')).length)

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts(category)
            setProduts(data)
        }
        fetchProducts()
    }, [category, basketCount])

    return (
        <div className="containter__products">
            {
                products.length !== 0 &&
                <div className="products">
                    {
                        products.map(elem => (
                            <Product key={elem.id} setMinus={() => setBasketCount(prev => prev - 1)} elem={elem} isBasket={category === "Корзина"} />
                        ))
                    }
                </div>
            }
            {
                products.length === 0 && <h3 className="products__not-find">Товаров в корзине не найдено!</h3>
            }
        </div >
    );
}

export default Products;