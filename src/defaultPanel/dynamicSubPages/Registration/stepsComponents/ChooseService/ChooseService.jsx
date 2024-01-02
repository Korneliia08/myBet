import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";

const ChooseService = () => {
    return (
        <div className="containerInRegistration">
            <Back/>
            <h4 className="mainTitle">Choose a barber</h4>
            <Moustache/>
            <p className="contentInRegistration">Barbershop offers professional services of certified barbers with years
                of experience. On this page you
                can choose a preferred barber in a few clicks.</p>
        </div>
    )
}
export default ChooseService;
