import Moustache from "../../../../components/Moustache/Moustache";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Summary = () => {
  const navigate = useNavigate();
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.summary,
  );

  function backToHomePage() {
    navigate("/");
  }

  return (
    <div className="containerInRegistration">
      <h4 className="mainTitle">{dataDefault.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: dataDefault.description }}
      ></p>
      <button className="btnBackToHome" onClick={backToHomePage}>
        Back To HomePage
      </button>
    </div>
  );
};
export default Summary;
