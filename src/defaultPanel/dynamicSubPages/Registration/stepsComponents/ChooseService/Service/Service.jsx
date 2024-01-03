import style from "./Service.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
    return (
        <div className={style.container}>
            <span className={style.spanId}>1.</span>
            <p className={style.serviceTitle}>Beard trim
                <FontAwesomeIcon icon={faInfo} className={`${style.icon} ${style.infoIcon}`}/>
            </p>
            <span className={style.spanPrice}>40<span className="greenSpanForMoney">$</span></span>
            <input type="checkbox"/>
        </div>
    )
}
export default Service;
