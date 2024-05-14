import "./footer.css"
import { useState, useEffect } from "react";

function Footer() {
    const [isOpenCompanyList, setOpenCompanyList] = useState(false);
    const [isOpenServiceList, setOpenServiceList] = useState(false);
    const [isOpenСooperationList, setOpenСooperationList] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 800) {
            setOpenCompanyList(true)
            setOpenServiceList(true)
            setOpenСooperationList(true)
        } else {
            setOpenCompanyList(false)
            setOpenServiceList(false)
            setOpenСooperationList(false)
        }
    }, [windowWidth]);

    return (
        <div className="footer__container">
            <div className="footer">
                <div className="footer-top">
                    <a href="/">PICASSO</a>
                </div>

                <div className="footer-bottom">
                    <div className="footer__area-menu">
                        <div className="menu-item menu-item__border-top">
                            <div className="menu-open">
                                <div className="menu-title">Компания</div>
                                <button className="open-button" onClick={() => setOpenCompanyList((prev) => !prev)}>
                                    {
                                        isOpenCompanyList ?
                                            <i className="fa-solid fa-arrow-up-long arrow-icon"></i> :
                                            <i className="fa-solid fa-arrow-down-long arrow-icon"></i>
                                    }
                                </button>
                            </div>

                            {
                                isOpenCompanyList &&
                                (<ul className="menu-list">
                                    <li className="menu-link"><a href="/about">О нас</a></li>
                                    <li className="menu-link"><a href="/requisites">Реквизиты</a></li>
                                    <li className="menu-link"><a href="/contact">Контактная информация</a></li>
                                </ul>)
                            }
                        </div>

                        <div className="menu-item">
                            <div className="menu-open">
                                <div className="menu-title">Сервис</div>
                                <button className="open-button" onClick={() => setOpenServiceList((prev) => !prev)}>
                                    {
                                        isOpenServiceList ?
                                            <i className="fa-solid fa-arrow-up-long arrow-icon"></i> :
                                            <i className="fa-solid fa-arrow-down-long arrow-icon"></i>
                                    }
                                </button>
                            </div>

                            {
                                isOpenServiceList &&
                                (<ul className="menu-list">
                                    <li className="menu-link"><a href="/payment">Оплата</a></li>
                                    <li className="menu-link"><a href="/delivery">Доставка</a></li>
                                    <li className="menu-link"><a href="/purchase_returns">Возврат товаров</a></li>
                                </ul>)
                            }
                        </div>

                        <div className="menu-item">
                            <div className="menu-open">
                                <div className="menu-title">Сотрудничество</div>
                                <button className="open-button" onClick={() => setOpenСooperationList((prev) => !prev)}>
                                    {
                                        isOpenСooperationList ?
                                            <i className="fa-solid fa-arrow-up-long arrow-icon"></i> :
                                            <i className="fa-solid fa-arrow-down-long arrow-icon"></i>
                                    }
                                </button>
                            </div>

                            {
                                isOpenСooperationList &&
                                (<ul className="menu-list">
                                    <li className="menu-link"><a href="/">Оптовые заказы</a></li>
                                    <li className="menu-link"><a href="/">Поставщикам</a></li>
                                </ul>)
                            }
                        </div>

                        <div className="menu-item menu-item__border-hide">
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