import Header from "./staticComponents/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./staticComponents/Footer/Footer";
import AboutUs from "./staticComponents/AboutUs/AboutUs";
import Services from "./staticComponents/Services/Services";
import Employees from "./staticComponents/Employees/Employees";

const DefaultPanel = () => {
    return (
        <>
            <Header/>
            <AboutUs/>
            <Services/>
            <Employees/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default DefaultPanel;
