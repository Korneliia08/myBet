import Moustache from "../../../../components/Moustache/Moustache";
import {useNavigate} from "react-router-dom";

const Summary = () => {
    const navigate = useNavigate();

    function backToHomePage() {
        navigate("/");
    }

    return (
        <div className="containerInRegistration">
            <h4 className="mainTitle">It is all</h4>
            <Moustache/>
            <p className="describeUnderTitle">
                Thanks for submitting your appointment! Our administrators will contact you shortly to confirm your
                booking and to answer questions you may have.
            </p>
            <button className="btnBackToHome" onClick={backToHomePage}>Back To HomePage</button>
        </div>
    )
}
export default Summary;
