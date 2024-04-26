import { FaRegRectangleList } from "react-icons/fa6";
import "./mainInfo.css"
import CollectItem from "../collection-item/CollectItem"
import wallpaper from '../../img/wallpaper.jpg';
import lighting from '../../img/lighting.jpg';
import plumbing from '../../img/plumbing.jpg';
import tools from '../../img/tools.jpg';
import floorCoverings from '../../img/floor coverings.jpg';
import buildingMaterials from '../../img/building materials.jpg';
import paints from '../../img/paints.jpg';
import windowsDoors from '../../img/windows and doors.jpg';
import sales from '../../img/sales.jpg';


function MainInfo() {
    return (
        <div className="layout__content">
            <div className="list-content">
                <div className="collection-list">
                    <CollectItem path="/" name="Обои" src={wallpaper} />
                    <CollectItem path="/" name="Освещение" src={lighting} />
                    <CollectItem path="/" name="Сантехника" src={plumbing} />
                    <CollectItem path="/" name="Инструменты" src={tools} />
                    <CollectItem path="/" name="Напольные покрытия" src={floorCoverings} />
                    <CollectItem path="/" name="Строй материалы" src={buildingMaterials} />
                    <CollectItem path="/" name="Краски" src={paints} />
                    <CollectItem path="/" name="Окна и двери" src={windowsDoors} />
                    <a href="/" className="link">
                        <div className="area-icon">
                            <FaRegRectangleList className="link-icon" />
                        </div>
                        <p className="link-text">Все категории</p>
                    </a>
                </div>
            </div>
            <div className="layout__sales">
                <div className="area-img">
                    <img className="sales-img" src={sales} alt="sales"></img>
                </div>
                <div className="banner">
                    <div className="banner-text">
                        <h3 className="main-text">Выгодно сегодня</h3>
                        <p className="out-text">Сезонные скидки, распродажи, ликвидация остатков! Все товары с сезонными скидками:</p>
                    </div>
                    <div className="banner-control">
                        <a href="/" className="banner-btn">Все товары</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainInfo;