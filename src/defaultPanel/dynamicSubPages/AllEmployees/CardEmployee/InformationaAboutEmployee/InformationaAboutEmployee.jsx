import style from "./InformationaAboutEmployee.module.css";
import imgEmployee from "../../../../assets/images/employee1.jpg";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";
import SocialMedias from "../../../../components/SocialMedias/SocialMedias";
import Moustache from "../../../../components/Moustache/Moustache";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import WorkingDays from "../../../../components/WorkingDays/WorkingDays";

const InformationAboutEmployee = () => {
    const navigate = useNavigate();

    function desplayRegistration() {
        navigate("/registration");
    }

    return (
        <div className={style.blockInformationAboutEmployee}>
            <div className={style.blockForImg}>
                <img src={imgEmployee} alt="image of employee" className={style.image}/>
            </div>
            <h3 className="mainTitle">Mattew Phillips</h3>
            <Moustache/>
            <WorkingDays/>
            <p className="desribeInInformationCard">Simon Wilson founded Barbershop in 2003 at the age of 23. He decided
                to
                establish a place where the long
                standing traditions of American barbering could be saved. He kept Barbershop a true place for men, their
                fathers, and sons, rather than converting it to a unisex salon as was the popular trend at the time.
                Over the past 13 years, Mr. Wilson has grown his shop from a small, local spot to a nationally and
                internationally recognized standard in the industry. Simon has been the recipient of various accolades
                including the HYPE Award for Entrepreneurs and the Hartford Business Journal's 40 Under Forty (Class of
                2014). He can be found at the shop on Wednesdays and Fridays.</p>
            <div className={style.blockForContact}>
                <h4>
                    Contact with me if you have any questions:
                </h4>
                <div className={style.blockForIconAndSpan}>
                    <FontAwesomeIcon icon={faEnvelope} className={style.icon}/>
                    <span>mattew@gmail.com</span>
                </div>
                <div className={style.blockForIconAndSpan}>
                    <FontAwesomeIcon icon={faPhone} className={style.icon}/>
                    <span>78883****</span>
                </div>
            </div>
            <div className={style.blockForBtns}>
                <button className={style.btnWrite}>Write to me</button>
                <button className={style.btnBook} onClick={desplayRegistration}>Book a visit</button>
            </div>
            <SocialMedias/>
            <ArrowBack/>
        </div>
    )
}
export default InformationAboutEmployee;
