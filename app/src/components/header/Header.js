import "./style.css"
import { FaAlignLeft } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaChartGantt } from "react-icons/fa6";
import { TbHeartCheck } from "react-icons/tb";
import { PiUserCircleGearThin } from "react-icons/pi";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header__area-logo">
          <a href="/" className="header__logo">PICASSO</a>
        </div>
        <div className="header__area-catalog">
          <button type="button" className="header__catalog-btn btn">
            <FaAlignLeft className="header__catalog-icon" />
            <p className="header__catalog">Каталог</p>
          </button>
        </div>
        <div className="header__area-search">
          <form className="header__form-search">
            <input type="text" autoComplete="off" className="header__input-search" placeholder="Поиск"></input>
            <button type="submit" className="header__search-btn btn">
              <IoIosSearch className="header__search-icon" />
            </button>
          </form>
        </div>
        <div className="header__area-controls">
          <div className="header__controls">
            <a href="/" className="header__control-btn">
              <FaChartGantt className="header__compare" />
            </a>
            <a href="/" className="header__control-btn">
              <TbHeartCheck className="header__favorites" />
            </a>
            <a href="/" className="header__control">
              <PiUserCircleGearThin className="header__profile-icon" />
              <p className="header__profile-text">Профиль</p>
            </a>
            <a href="/" className="header__control basket">
              <SlBasket className="header__cart-icon" />
              <span className="header__cart-text">Корзина</span>
              <p className="header__cart-counter">0</p>
            </a>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header__area-menu">
          <ul className="header__menu">
            <li className="header__manu-item"><a href="about">О нас</a></li>
            <li className="header__manu-item"><a href="payment">Оплата</a></li>
            <li className="header__manu-item"><a href="delivery">Доставка</a></li>
            <li className="header__manu-item"><a href="contact">Контакты</a></li>
          </ul>
        </div>
        <div className="header__area-contacts">
          <a className="header__phone-value" href="tel:+375447262248">+375 (44) 726-22-48</a>
        </div>
      </div>
    </div>
  );
}

export default Header;