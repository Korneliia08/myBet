import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./Veryfication.module.css";
import {useNavigate} from "react-router-dom";

const Veryfication = () => {
    const navigate = useNavigate();

    function desplaySummary(event) {
        event.preventDefault();
        navigate("/registration/summary");
    }

    return (
        <div className="containerInRegistration">
            <Back/>
            <h4 className="mainTitle">Verification</h4>
            <Moustache/>
            <p className="describeUnderTitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deleniti harum quis temporibus
                voluptates! Aliquid corporis debitis doloribus esse facere hic ipsum maiores necessitatibus, optio
                sapiente!
            </p>
            <form className={style.form}>
                <input type="text" placeholder="veryfication code"/>
                <input type="submit" value="Next" className="nextBtn" onClick={desplaySummary}/>
            </form>
        </div>
    )
}
export default Veryfication;
