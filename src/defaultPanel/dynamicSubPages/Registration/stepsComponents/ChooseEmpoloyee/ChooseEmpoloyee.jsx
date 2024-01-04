import style from "./ChooseEmpoloyee.module.css";
import CardOfEmployee from "./CardOfEmployee/CardOfEmployee";
import Moustache from "../../../../components/Moustache/Moustache";

const ChooseEmpoloyee = () => {
    return (
        <div className="containerInRegistration">
            <h4 className="mainTitle">Choose a barber</h4>
            <Moustache/>
            <p className="describeUnderTitle">Barbershop offers professional services of certified barbers with years
                of experience. On this page you
                can choose a preferred barber in a few clicks.</p>
            <div className={style.blockForCards}>
                <CardOfEmployee/>
                <CardOfEmployee/>
                <CardOfEmployee/>
                <CardOfEmployee/>
                <CardOfEmployee/>
            </div>
        </div>
    )
}
export default ChooseEmpoloyee;
