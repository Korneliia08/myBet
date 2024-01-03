import style from "./FormBasicData.module.css";
import {useNavigate} from "react-router-dom";

const FormBasicData = () => {
    const navigate = useNavigate();

    function desplayVeryfication(event) {
        event.preventDefault();
        navigate("/registration/veryfication")
    }

    return (
        <div className={style.container}>
            <form>
                <div className={style.groupOfInputs}>
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Second name"/>
                </div>
                <div className={style.groupOfInputs}>
                    <div className={style.blockForNumberOfPhone}>
                        <select>
                            <option value="+48">+48</option>
                            <option value="+380">+380</option>
                        </select>
                        <input type="text" placeholder="Number of phone"/>
                    </div>
                    <input type="text" placeholder="E-mail"/>
                </div>
                <input type="submit" value="Book Now" className={style.btnBook} onClick={desplayVeryfication}/>
            </form>
        </div>
    )
}
export default FormBasicData;
