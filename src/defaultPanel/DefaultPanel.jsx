import Header from "./staticComponents/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./staticComponents/Footer/Footer";
import AboutUs from "./staticComponents/AboutUs/AboutUs";

const DefaultPanel = () => {
    return (
        <>
            <Header/>
            <AboutUs/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default DefaultPanel;
