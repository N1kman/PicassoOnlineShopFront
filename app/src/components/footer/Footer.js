import "./footer.css"

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer">
                <div className="footer-top">
                    <a href="/">PICASSO</a>
                </div>
                <div className="footer-bottom">
                    <div className="footer__area-menu">
                        <div className="menu-item">
                            <div className="menu-title">Компания</div>
                            <ul className="menu-list">
                                <li className="menu-link"><a href="about">О нас</a></li>
                                <li className="menu-link"><a href="/">Новости</a></li>
                                <li className="menu-link"><a href="/">Реквизиты</a></li>
                                <li className="menu-link"><a href="/">Вакансии</a></li>
                                <li className="menu-link"><a href="contact">Контактная информация</a></li>
                            </ul>
                        </div>
                        <div className="menu-item">
                            <div className="menu-title">Сервис</div>
                            <ul className="menu-list">
                                <li className="menu-link"><a href="/">Как заказать</a></li>
                                <li className="menu-link"><a href="payment">Оплата</a></li>
                                <li className="menu-link"><a href="delivery">Доставка</a></li>
                                <li className="menu-link"><a href="/">Скидки и бонусы</a></li>
                                <li className="menu-link"><a href="/">Возврат товаров</a></li>
                            </ul>
                        </div>
                        <div className="menu-item">
                            <div className="menu-title">Сотрудничество</div>
                            <ul className="menu-list">
                                <li className="menu-link"><a href="/">Оптовые заказы</a></li>
                                <li className="menu-link"><a href="/">Поставщикам</a></li>
                            </ul>
                        </div>
                        <div className="menu-item">
                            <p className="sidebar-title">Контакты</p>
                            <a className="sidebar-phone" href="tel:+375447262248">+375 (44) 726-22-48</a>
                            <p className="sidebar-address">г.Минск, ул.Гикало, 9, корпус 4</p>
                            <div className="sidebar-icons">
                                <div className="sidebar-icon">
                                    <a href="https://t.me/N1ck08">
                                        <i className="fa-brands fa-telegram tg-icon"></i>
                                    </a>
                                </div>
                                <div className="sidebar-icon">
                                    <a href="https://vk.com/n1_ta">
                                        <i className="fa-brands fa-vk vk-icon"></i>
                                    </a>
                                </div>
                                <div className="sidebar-icon">
                                    <a href="https://www.youtube.com/?app=desktop&hl=ru&gl=BY">
                                        <i className="fa-brands fa-youtube youtube-icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;