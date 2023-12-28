import style from "./CardEmployee.module.css";
import employeeImg from "../../../assets/employee1.jpg";
import {useNavigate} from "react-router-dom";

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
        </div>
    )
}
export default CardEmployee;
