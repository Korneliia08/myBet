import style from "./CardEmployee.module.css";
import employeeImg from "../../../assets/images/employee1.jpg";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faSquareInstagram, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const CardEmployee = () => {
    const navigate = useNavigate();

    function displayCurrentEmployee() {
        navigate("/currentEmployee");
    }

    return (
        <div className={style.cardEmployee} onClick={displayCurrentEmployee}>
            <img src={employeeImg} alt="image of employee"/>
            <h3 className={style.nameSurname}>Matthew Phillips</h3>
            <p className={style.describe}>Matthew has several years of experience in the barber industry</p>
            <div className={style.containerForIcons}>
                <FontAwesomeIcon icon={faFacebook} className={`${style.icon} ${style.fb}`}/>
                <FontAwesomeIcon icon={faSquareInstagram} className={`${style.icon} ${style.insta}`}/>
                <FontAwesomeIcon icon={faTelegram} className={`${style.icon} ${style.telegram}`}/>
                <FontAwesomeIcon icon={faTwitter} className={`${style.icon} ${style.twitter}`}/>
            </div>
        </div>
    )
}
export default CardEmployee;
