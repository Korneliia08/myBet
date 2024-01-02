import style from "./ChooseEmpoloyee.module.css";
import CardOfEmployee from "./CardOfEmployee/CardOfEmployee";
import Moustache from "../../../../components/Moustache/Moustache";
import Back from "../../../../components/Back/Back";

const ChooseEmpoloyee = () => {
    return (
        <div className={style.container}>
            <Back/>
            <h4 className="mainTitle">Choose a barber</h4>
            <Moustache/>
            <p>Barbershop offers professional services of certified barbers with years of experience. On this page you
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
