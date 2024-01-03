import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./ChooseDate.module.css";
import DateCard from "./DateCard/DateCard";

const ChooseDate = () => {
    return (
        <div className="containerInRegistration">
            <Back/>
            <h4 className="mainTitle">Choose a date</h4>
            <Moustache/>
            <p className="contentInRegistration">Barbershop offers professional services of certified barbers with years
                of experience. On this page you
                can choose a preferred barber in a few clicks.</p>
            <div className={style.containerForDate}>
                <DateCard/>
            </div>
        </div>
    )
}
export default ChooseDate;
