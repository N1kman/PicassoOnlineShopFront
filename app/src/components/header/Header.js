import "./header.css"
import { useState, useEffect, useContext } from "react";
import { FaAlignLeft } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { FaChartGantt } from "react-icons/fa6";
import { TbHeartCheck } from "react-icons/tb";
import { PiUserCircleGearThin } from "react-icons/pi";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import { AuthModalContext } from "../../context/authModalContext";
import { checkAuth } from '../authModal/checkAuth';

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const { openAuthModal } = useContext(AuthModalContext)

  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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
    if (windowWidth > 600) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [windowWidth]);

  function handleAccountClick() {
    if (checkAuth()) {
      navigate('/account');
    } else {
      openAuthModal();
    }
  }

  function handleCatalogClick() {
    navigate('/products/Все');
  }

  return (
    <div className="header__container">
      <div className="header">
        <div className="header-top">
          <div className="header__area-topleft">

            <div className="header__area-logo">
              <button className="menu-btn" onClick={() => setOpen((prev) => !prev)}>
                {isOpen ? <i className="fa-solid fa-xmark icon-menu"></i> : <i className="fa-solid fa-bars icon-menu"></i>}
              </button>
              <a href="/" className="header__logo">PICASSO</a>
              <a href="/" className="icon-basket">
                <SlBasket className="header__cart-icon icon-hide" />
              </a>
            </div>

            {isOpen &&
              <button onClick={() => handleCatalogClick()} type="button" className="header__catalog-btn btn">
                <FaAlignLeft className="header__catalog-icon" />
                <p className="header__catalog">Каталог</p>
              </button>
            }

            {isOpen &&
              <div className="header__area-search">
                <form className="header__form-search">
                  <input type="text" autoComplete="off" className="header__input-search" placeholder="Поиск"></input>
                  <button type="submit" className="header__search-btn btn">
                    <IoIosSearch className="header__search-icon" />
                  </button>
                </form>
              </div>
            }
          </div>

          {isOpen &&
            <div className="header__controls">
              <a href="/" className="header__control-btn">
                <FaChartGantt className="header__compare" />
              </a>

              <a href="/" className="header__control-btn">
                <TbHeartCheck className="header__favorites" />
              </a>

              <button className="header__control" onClick={handleAccountClick}>
                <PiUserCircleGearThin className="header__profile-icon" />
                <p className="header__profile-text">Профиль</p>
              </button>

              <a href="/" className="header__control basket">
                <SlBasket className="header__cart-icon" />
                <span className="header__cart-text">Корзина</span>
                <p className="header__cart-counter">0</p>
              </a>
            </div>
          }
        </div>


        {isOpen &&
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
        }
      </div>
    </div>
  );
}

export default Header;