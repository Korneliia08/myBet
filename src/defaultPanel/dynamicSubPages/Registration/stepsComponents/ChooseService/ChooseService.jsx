import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./ChooseService.module.css";
import Service from "./Service/Service";
import {useNavigate} from "react-router-dom";

const ChooseService = () => {
    const navigate = useNavigate();

    function desplayChooseDate() {
        navigate("/registration/date");
    }

    return (
        <div className="containerInRegistration">
            <Back/>
            <h4 className="mainTitle">Choose a service</h4>
            <Moustache/>
            <p className="describeUnderTitle">Barbershop offers professional services of certified barbers with years
                of experience. On this page you
                can choose a preferred barber in a few clicks.</p>
            <div className={style.containerForServices}>
                <div className={style.blockForHeadlines}>
                    <span className={style.nr}>Nr</span>
                    <span className={style.service}>Service</span>
                    <span className={style.price}>Price</span>
                    <span className={style.choose}>Choose</span>
                </div>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
            </div>
            <div className={style.bottomPart}>
                <span className={style.totalSum}>Total sum: 50<span
                    className={`${style.greenSpanForMoney} greenSpanForMoney`}>$</span></span>
                <button className="nextBtn" onClick={desplayChooseDate}>Next</button>
            </div>
        </div>
    )
}
export default ChooseService;
