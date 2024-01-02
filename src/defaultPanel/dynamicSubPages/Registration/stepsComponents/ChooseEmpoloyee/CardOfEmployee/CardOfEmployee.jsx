import style from "./CardOfEmployee.module.css";
import image from "../../../../../assets/images/employee1.jpg";

const CardOfEmployee = () => {
    return (
        <div className={style.container}>
            <img src={image} alt="image of employee"/>
            <div className={style.rightPart}>
                <h5>Matthew Phillips</h5>
                <button>Choose</button>
            </div>
        </div>
    )
}
export default CardOfEmployee;
