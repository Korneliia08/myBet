import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./BasicData.module.css";
import FormBasicData from "./FormBasicData/FormBasicData";
import Summary from "./Summary/Summary";

const BasicData = () => {
    return (
        <div className="containerInRegistration">
            <Back/>
            <h4 className="mainTitle">Enter basic data</h4>
            <Moustache/>
            <p className="contentInRegistration">Barbershop offers professional services of certified barbers with years
                of experience. On this page you
                can choose a preferred barber in a few clicks.</p>
            <div className={style.containerForSummaryAndForm}>
                <Summary/>
                <FormBasicData/>
            </div>
        </div>
    )
}
export default BasicData;
