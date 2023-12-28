import style from "./ArrowBack.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const ArrowBack = () => {
    const navigate = useNavigate();

    function backOneStep() {
        navigate(-1);
    }

    return (
        <div className={style.firstBlock} onClick={backOneStep}>
            <div className={style.secondBlock}></div>
            <FontAwesomeIcon icon={faArrowLeft} className={style.btnArrowLeft}/>
        </div>
    )
}
export default ArrowBack;
