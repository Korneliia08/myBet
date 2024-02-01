import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./ChooseDate.module.css";
import DateCard from "./DateCard/DateCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChooseDate = () => {
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.chooseAdate,
  );

  const navigate = useNavigate();
  const idOfEmployee = useSelector((state) => state.registration.idOfEmployee);
  const idOfServices = useSelector((state) => state.registration.idOfServices);
  useEffect(() => {
    if (idOfServices.length) {
      toast.warn("Registration back to first step</br> No service selected", {
        allowHtml: true,
      });
      navigate("/registration");
    }

    if (idOfEmployee === 0) {
      toast.warn("Registration back to first step</br>No employee selected", {
        allowHtml: true,
      });
      navigate("/registration");
    }
  }, [idOfEmployee]);
  return (
    <div className="containerInRegistration">
      <Back />
      <h4 className="mainTitle">{dataDefault.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: dataDefault.description }}
      ></p>
      <div className={style.containerForDate}>
        <DateCard />
      </div>
    </div>
  );
};
export default ChooseDate;
