import style from "./Services.module.css";
import Moustache from "../../../components/Moustache/Moustache";
import { useSelector } from "react-redux";
import ServiceCard from "./ServiceCard/ServiceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Services = () => {
  const allServices = useSelector((state) => state.services.services);
  const serviceCard = allServices.map((service) => (
    <ServiceCard data={service} />
  ));
  var settings = {
    dots: true,
    infinite: serviceCard.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: serviceCard.length > 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          infinite: serviceCard.length > 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: serviceCard.length > 1,
        },
      },
    ],
  };
  const data = useSelector((state) => state.stateOfPage.stateOfPage.services);
  return (
    <section className={style.container} id="sectionServices">
      <div className={style.blockForTitle}>
        <h2 className="mainTitle">{data.title}</h2>
        <Moustache />
      </div>
      <div className={style.containerForServicesCard}>
        <div style={{ width: "90vw" }}>
          <Slider {...settings}>{serviceCard}</Slider>
        </div>
      </div>
    </section>
  );
};
export default Services;
