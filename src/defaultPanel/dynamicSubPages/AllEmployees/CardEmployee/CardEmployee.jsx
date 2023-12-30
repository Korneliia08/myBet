import style from "./CardEmployee.module.css";
import employeeImg from "../../../assets/images/employee1.jpg";
import {useNavigate} from "react-router-dom";
import SocialMedias from "../../../components/SocialMedias/SocialMedias";

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
            <SocialMedias/>
        </div>
    )
}
export default CardEmployee;
