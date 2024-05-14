import axios from "axios";

async function getProducts(category) {
    if (category === 'Корзина') {
        return JSON.parse(localStorage.getItem('basket')) ?? []
    }

    const { data } = await axios.get('http://localhost:8080/products')
    category = category.replaceAll('_', ' ')
    if (category === 'Все') {
        return data;
    } else {
        return data.filter(p => p.category === category)
    }
}

export default getProducts;