import Header from "./staticComponents/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./staticComponents/Footer/Footer";


const DefaultPanel = () => {
    return (
        <div class='test'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default DefaultPanel;
