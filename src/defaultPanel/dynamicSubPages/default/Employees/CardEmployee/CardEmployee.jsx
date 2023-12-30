import style from "./CardEmployee.module.css";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faSquareInstagram, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const CardEmployee = (props) => {
    const navigate = useNavigate();
    const image = props.data;

    function displayInfoAboutEmployee() {
        navigate("/currentEmployee");
    }

    return (
        <div className={style.cardOfEmployee} onClick={displayInfoAboutEmployee}>
            <img src={image} alt="image of emloyee"/>
            <h3 className={style.nameSurname}>simon gili</h3>
            <p className={style.information}>Simon has several years of experience in the barber industry.</p>
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
