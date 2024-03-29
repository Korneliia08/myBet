import style from "./Footer.module.css";
import React from "react";
import Describe from "./Describe/Describe";
import Contact from "./Contact/Contact";
import OpeningHours from "./OpeningHours/OpeningHours";
import Map from "./Map/Map";
import Address from "./Address/Address";
import { useSelector } from "react-redux";

const Footer = () => {
  const data = useSelector((state) => state.stateOfPage.stateOfPage.footer);
  return (
    <footer id="footer">
      <div className={style.topPartFooter}>
        <Describe />
        <OpeningHours />
        <Contact data={data.contact} />
        <Address data={data.address} />
        <Map />
      </div>
      <div className={style.bottomPartFooter}>
        <h4 className={style.title}>
          © 2023 Barber Sali<span>o</span>n
        </h4>
      </div>
    </footer>
  );
};
export default Footer;
