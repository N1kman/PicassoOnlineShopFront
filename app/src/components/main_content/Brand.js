import "./brand.css"
import picture1 from "../../img/brand/brand_1.png"
import picture2 from "../../img/brand/brand_2.png"
import picture3 from "../../img/brand/brand_3.png"
import picture4 from "../../img/brand/brand_4.png"
import picture5 from "../../img/brand/brand_5.png"
import picture6 from "../../img/brand/brand_6.png"
import picture7 from "../../img/brand/brand_7.png"
import picture8 from "../../img/brand/brand_8.png"
import picture9 from "../../img/brand/brand_9.png"
import picture10 from "../../img/brand/brand_10.png"
import picture11 from "../../img/brand/brand_11.png"

function Brand() {
    return (
        <div className="brand__container">
            <div className="brand">
                <div className="brand-title">
                    <h2>Бренды в нашем магазине</h2>
                </div>
                <div className="brand-menu">
                    <img className="picture" src={picture1} alt="picture1"></img>
                    <img className="picture" src={picture2} alt="picture2"></img>
                    <img className="picture" src={picture3} alt="picture3"></img>
                    <img className="picture" src={picture4} alt="picture4"></img>
                    <img className="picture" src={picture5} alt="picture5"></img>
                    <img className="picture" src={picture6} alt="picture6"></img>
                    <img className="picture" src={picture7} alt="picture7"></img>
                    <img className="picture" src={picture8} alt="picture8"></img>
                    <img className="picture" src={picture9} alt="picture9"></img>
                    <img className="picture" src={picture10} alt="picture10"></img>
                    <img className="picture" src={picture11} alt="picture11"></img>
                    <img className="picture" src={picture1} alt="picture12"></img>
                </div>
            </div>
        </div>
    );
}

export default Brand;