import style from "./CardEmployee.module.css";
import employeeImg from "../../../assets/employee1.jpg";

const CardEmployee = () => {
    return (
        <div className={style.cardEmployee}>
            <img src={employeeImg} alt="image of employee"/>
            <h3 className={style.nameSurname}>Mruko</h3>
            <p className={style.describe}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, sed.</p>
        </div>
    )
}
export default CardEmployee;
