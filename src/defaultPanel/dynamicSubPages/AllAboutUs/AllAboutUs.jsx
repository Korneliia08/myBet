import style from "./AllAboutUs.module.css";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import image from "../../assets/images/aboutUs.jpg";
import Moustache from "../../components/Moustache/Moustache";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import scrollToTop from "../../../pipes/scrollToTop";

const AllAboutUs = () => {
  const data = useSelector((state) => state.stateOfPage.stateOfPage.aboutUs);
  return (
    <section className="containerSubPage">
      <h2 className="mainTitle">{data.information.title}</h2>
      <Moustache />
      <img src={image} alt="about us" className={style.image} />
      <p
        className={style.content}
        dangerouslySetInnerHTML={{ __html: data.information.mainDescription }}
      ></p>
      <ArrowBack />
    </section>
  );
};
export default AllAboutUs;
