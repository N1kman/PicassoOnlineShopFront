import "./info.css"

function Payment() {
    return (
        <div className="info__container">
            <div className="payment">
                <h1>Оплата</h1>
                <h3>Вы можете оплатить заказ:</h3>
                <ol>
                    <li>Наличными курьеру или в пункте выдачи при получении заказа</li>
                    <li>Банковской картой Visa, Mastercard или МИР через сайт при оформлении заказа</li>
                    <li>Наложенным платежом при заказе с доставкой Почтой РБ</li>
                </ol>
            </div>
        </div>
    );
}

export default Payment;