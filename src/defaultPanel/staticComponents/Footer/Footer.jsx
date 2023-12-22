import style from "./Footer.module.css";
import React from "react";
import Describe from "./Describe/Describe";
import Headquaters from "./Headquaters/Headquaters";
import OpeningHours from "./OpeningHours/OpeningHours";
import Map from "./Map/Map";

const Footer = () => {
    return (
        <footer>
            <div className={style.topPartFooter}>
                <Describe/>
                <Headquaters/>
                <OpeningHours/>
                <Map/>
            </div>
            <div className={style.bottomPartFooter}>
                <h4 className={style.title}>© 2023 Barber Sali<span>o</span>n</h4>
            </div>
        </footer>
    )
}
export default Footer;
