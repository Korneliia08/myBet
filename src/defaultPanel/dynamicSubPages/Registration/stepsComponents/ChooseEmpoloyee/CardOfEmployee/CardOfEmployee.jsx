import style from "./CardOfEmployee.module.css";
import image from "../../../../../assets/images/employee1.jpg";
import {useNavigate} from "react-router-dom";
import WorkingDays from "../../../../../components/WorkingDays/WorkingDays";

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
                <WorkingDays/>
                <button onClick={desplayChooseAService}>Choose</button>
            </div>
        </div>
    )
}
export default CardOfEmployee;
