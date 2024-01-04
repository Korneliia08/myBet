import style from "./ServiceInfo.module.css";
import Moustache from "../../components/Moustache/Moustache";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import imageOfService from "../../assets/images/haircutService.jpg";
import {useNavigate} from "react-router-dom";

const ServiceInfo = () => {
    const navigate = useNavigate();

    function desplayRegistration() {
        navigate("/registration");
    }

    return (
        <section className={style.section}>
            <ArrowBack/>
            <h3 className="mainTitle">Our Service</h3>
            <Moustache/>
            <div className={style.cardOfInfo}>
                <div className={style.mainInfo}>
                    <img src={imageOfService} alt="image of service"/>
                    <h4>Beard Shave</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi assumenda at aut commodi
                        culpa
                        ea eligendi, error esse eum expedita facilis id incidunt ipsam, minus nobis obcaecati omnis
                        possimus quaerat quibusdam rem reprehenderit sapiente similique tenetur unde. Accusantium,
                        labore.</p>
                    <span>Price:80<span className="greenSpanForMoney">$</span></span>
                </div>
                <button className="btnBook" onClick={desplayRegistration}>Book Now</button>
            </div>
        </section>
    )
}
export default ServiceInfo;
