import style from "./Back.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const Back = () => {
    const navigate = useNavigate();

    function backOneStep() {
        navigate(-1);
    }

    return (
        <span className={style.back} onClick={backOneStep}>
                   <FontAwesomeIcon icon={faArrowLeft}/>
                Back
            </span>
    )
}
export default Back;
