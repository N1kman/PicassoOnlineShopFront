import "./products.css"
import getProducts from "./getProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products() {

    const [products, setProduts] = useState([])

    const { category } = useParams()

    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts(category)
            setProduts(data)
        }
        fetchProducts()
    }, [category])

    return (
        <div className="containter__products">
            <div className="products">
                {
                    products.map(elem => (
                        <span>{elem.name}</span>
                    ))
                }
            </div>
        </div >
    );
}

export default Products;