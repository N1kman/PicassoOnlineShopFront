function saveToBasket(product) {
    const products = JSON.parse(localStorage.getItem('basket')) ?? []
    if (!products.find(elem => elem.id === product.id)) {
        products.push(product)
        localStorage.setItem('basket', JSON.stringify(products))
        document.getElementById('basket_count').innerText = products.length
    }
}

function removeFromBasket(product) {
    let products = JSON.parse(localStorage.getItem('basket')) ?? []
    products = products.filter(elem => elem.id !== product.id)
    localStorage.setItem('basket', JSON.stringify(products))
    document.getElementById('basket_count').innerText = products.length
}

export { saveToBasket, removeFromBasket }