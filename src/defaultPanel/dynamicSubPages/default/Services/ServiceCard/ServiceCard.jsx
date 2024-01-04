import style from "./ServiceCard.module.css";
import haircurtService from "../../../../assets/images/haircutService.jpg";
import {useNavigate} from "react-router-dom";

const ServiceCard = () => {
    const navigate = useNavigate();

    function desplaySubPage() {
        navigate("allServices");
    }

    return (
        <div className={style.container}>
            <div className={style.serviceCard}>
                <div className={style.blockForImage} onClick={desplaySubPage}>
                    <img src={haircurtService} alt="haircurt service image" className={style.imageService}/>
                </div>
                <h3 className={style.title}>Haircut Styles</h3>
                <p className={style.describe}>Barber is a person whose occupation is mainly to cut dress style.</p>
            </div>
        </div>
    )
}
export default ServiceCard;
