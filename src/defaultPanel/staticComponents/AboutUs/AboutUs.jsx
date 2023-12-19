import ContainerForPhotos from "./ContainerForPhotos/ContainerForPhotos";
import Content from "./Content/Content";
import style from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <section className={style.section}>
            <ContainerForPhotos/>
            <Content/>
        </section>
    )
}
export default AboutUs;
