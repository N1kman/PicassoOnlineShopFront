import "./products.css"
import getProducts from "./getProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

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
                        <Product elem={elem} />
                    ))
                }
            </div>
        </div >
    );
}

export default Products;