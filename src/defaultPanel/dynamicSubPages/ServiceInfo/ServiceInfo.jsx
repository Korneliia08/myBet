import style from "./ServiceInfo.module.css";
import Moustache from "../../components/Moustache/Moustache";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCoins } from "@fortawesome/free-solid-svg-icons";

const ServiceInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentService = useSelector((state) =>
    state.services.services.find((service) => service.id === Number(id)),
  );
  const defaultData = useSelector(
    (state) => state.stateOfPage.stateOfPage.services.subPage,
  );

  function desplayRegistration() {
    navigate("/registration");
  }

  if (!currentService) {
    return "loading";
  }
  const imageId = currentService.imageId ? currentService.imageId : 0;
  return (
    <section className={style.section}>
      <ArrowBack />
      <h3 className="mainTitle">{defaultData.title}</h3>
      <Moustache />
      <div className={style.cardOfInfo}>
        <div className={style.mainInfo}>
          <div className={style.imgAndTitle}>
            <img
              src={`https://api.fenek.tech/files/image/${imageId}`}
              alt={`image of ${currentService.title} service`}
            />
            <div>
              <h4>{currentService.title}</h4>
              <div className={style.container}>
                <span>
                  {currentService.price} zł
                  <FontAwesomeIcon icon={faCoins} className="iconMoney" />
                </span>
              </div>
              <div className={style.container}>
                <span>
                  {currentService.time} minutes
                  <FontAwesomeIcon icon={faClock} className="iconClock" />
                </span>
              </div>
            </div>
          </div>
          <div className={style.describe}>
            <p
              className={`${style.content} describeInInformationCard`}
              dangerouslySetInnerHTML={{ __html: currentService.description }}
            ></p>
          </div>
        </div>
        <button className="btnBook" onClick={desplayRegistration}>
          Book Now
        </button>
      </div>
    </section>
  );
};
export default ServiceInfo;
