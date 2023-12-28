import style from "./CardEmployee.module.css";
import {useNavigate} from "react-router-dom";

const CardEmployee = (props) => {
    const navigate = useNavigate();
    const image = props.data;

    function displayInfoAboutEmployee() {
        navigate("/currentEmployee");
    }

    return (
        <div className={style.cardOfEmployee} onClick={displayInfoAboutEmployee}>
            <img src={image} alt="image of emloyee"/>
            <h3 className={style.nameSurname}>simon gili</h3>
            <p className={style.information}>Simon has several years of experience in the barber industry.</p>
        </div>
    )
}
export default CardEmployee;
