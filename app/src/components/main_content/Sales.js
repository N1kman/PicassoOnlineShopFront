import "./sales.css"
import picture1 from "../../img/sales/1.jpg"
import picture2 from "../../img/sales/2.jpg"
import picture3 from "../../img/sales/3.jpg"
import picture4 from "../../img/sales/4.jpg"
import picture5 from "../../img/sales/5.jpg"
import picture6 from "../../img/sales/6.jpg"
import picture7 from "../../img/sales/7.jpg"

function Sales() {
    return (
        <div className="sales__container">
            <div className="sales">
                <div className="el">
                    <img src={picture1} alt="picture1"></img>
                </div>
                <div className="el-large">
                    <img src={picture2} alt="picture2"></img>
                </div>
                <div className="el">
                    <img src={picture3} alt="picture3"></img>
                </div>
                <div className="el">
                    <img src={picture4} alt="picture4"></img>
                </div>
                <div className="el">
                    <img src={picture5} alt="picture5"></img>
                </div>
                <div className="el">
                    <img src={picture6} alt="picture6"></img>
                </div>
                <div className="el">
                    <img src={picture7} alt="picture7"></img>
                </div>
            </div>
        </div>
    );
}

export default Sales;