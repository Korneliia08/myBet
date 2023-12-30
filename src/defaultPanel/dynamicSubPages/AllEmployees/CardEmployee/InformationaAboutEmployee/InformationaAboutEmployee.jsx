import style from "./InformationaAboutEmployee.module.css";
import imgEmployee from "../../../../assets/images/employee1.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faSquareInstagram, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";

const InformationaAboutEmployee = () => {
    return (
        <div className={style.blockInformationAboutEmployee}>
            <div className={style.blockForImg}>
                <img src={imgEmployee} alt="image of employee" className={style.image}/>
            </div>
            <h3 className={style.nameSurname}>Mattew Phillips</h3>
            <p className={style.describe}>Simon Wilson founded Barbershop in 2003 at the age of 23. He decided to
                establish a place where the long
                standing traditions of American barbering could be saved. He kept Barbershop a true place for men, their
                fathers, and sons, rather than converting it to a unisex salon as was the popular trend at the time.
                Over the past 13 years, Mr. Wilson has grown his shop from a small, local spot to a nationally and
                internationally recognized standard in the industry. Simon has been the recipient of various accolades
                including the HYPE Award for Entrepreneurs and the Hartford Business Journal's 40 Under Forty (Class of
                2014). He can be found at the shop on Wednesdays and Fridays.</p>
            <div className={style.containerForIcons}>
                <FontAwesomeIcon icon={faFacebook} className={`${style.icon} ${style.fb}`}/>
                <FontAwesomeIcon icon={faSquareInstagram} className={`${style.icon} ${style.insta}`}/>
                <FontAwesomeIcon icon={faTelegram} className={`${style.icon} ${style.telegram}`}/>
                <FontAwesomeIcon icon={faTwitter} className={`${style.icon} ${style.twitter}`}/>
            </div>
            <ArrowBack/>
        </div>
    )
}
export default InformationaAboutEmployee;
