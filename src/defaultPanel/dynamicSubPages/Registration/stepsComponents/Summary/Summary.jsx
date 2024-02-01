import Moustache from "../../../../components/Moustache/Moustache";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import scrollToTop from "../../../../../pipes/scrollToTop";

const Summary = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const navigate = useNavigate();
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.summary,
  );

  function backToHomePage() {
    navigate("/");
  }

  const idOfEmployee = useSelector((state) => state.registration.idOfEmployee);
  const idOfServices = useSelector((state) => state.registration.idOfServices);
  useEffect(() => {
    if (idOfServices.length === 0) {
      toast.warn("Registration back to first step. No service selected");
      navigate("/registration");
    }

    if (idOfEmployee === 0) {
      toast.warn("Registration back to first step. No employee selected");
      navigate("/registration");
    }
  }, [idOfEmployee, idOfServices]);

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
