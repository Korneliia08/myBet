import style from "./CardOfEmployee.module.css";
import image from "../../../../../assets/images/employee1.jpg";
import {useNavigate} from "react-router-dom";

const CardOfEmployee = () => {
    const navigate = useNavigate();

    function desplayChooseAService() {
        navigate("/registration/service");
    }

    return (
        <div className={style.container}>
            <img src={image} alt="image of employee"/>
            <div className={style.rightPart}>
                <h5>Matthew Phillips</h5>
                <div className={style.containerAllDays}>
                    <span>Mo</span>
                    <span className={style.noActive}>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span className={style.noActive}>St</span>
                    <span>Sn</span>
                </div>
                <button onClick={desplayChooseAService}>Choose</button>
            </div>
        </div>
    )
}
export default CardOfEmployee;
