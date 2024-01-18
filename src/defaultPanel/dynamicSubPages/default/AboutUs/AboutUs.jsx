import { useSelector } from "react-redux";
import style from "./AboutUs.module.css";
import ContainerForPhotos from "./ContainerForPhotos/ContainerForPhotos";
import Content from "./Content/Content";

const AboutUs = () => {
  const data = useSelector((state) => state.stateOfPage.stateOfPage.aboutUs);
  return (
    <section className={style.section} id="sectionAboutUs">
      <ContainerForPhotos data={data.images} />
      <Content data={data.information} />
    </section>
  );
};
export default AboutUs;
