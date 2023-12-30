import style from "./SocialMedias.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faSquareInstagram, faTelegram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const SocialMedias = () => {
    return (
        <div className={style.containerForIcons}>
            <FontAwesomeIcon icon={faFacebook} className={`${style.icon} ${style.fb}`}/>
            <FontAwesomeIcon icon={faSquareInstagram} className={`${style.icon} ${style.insta}`}/>
            <FontAwesomeIcon icon={faTelegram} className={`${style.icon} ${style.telegram}`}/>
            <FontAwesomeIcon icon={faTwitter} className={`${style.icon} ${style.twitter}`}/>
        </div>
    )
}
export default SocialMedias;
