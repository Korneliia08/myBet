import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./BasicData.module.css";
import FormBasicData from "./FormBasicData/FormBasicData";
import Summary from "./Summary/Summary";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import scrollToTop from "../../../../../pipes/scrollToTop";

const BasicData = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.basicData,
  );

  const navigate = useNavigate();
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
      <Back />
      <h4 className="mainTitle">{dataDefault.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: dataDefault.description }}
      ></p>
      <div className={style.containerForSummaryAndForm}>
        <Summary />
        <FormBasicData />
      </div>
    </div>
  );
};
export default BasicData;
