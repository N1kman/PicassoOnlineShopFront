import MainInfo from "../main_content/MainInfo"
import Sales from "../main_content/Sales"
import Brand from "../main_content/Brand"

function Main() {
    return (
        <div className="container">
            <MainInfo />
            <Sales />
            <Brand />
        </div>
    );
}

export default Main;