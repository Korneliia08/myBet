import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./Veryfication.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import scrollToTop from "../../../../../pipes/scrollToTop";

const Veryfication = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const navigate = useNavigate();
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.veryfication,
  );

  const [messageInTimeSending, setMessageInTimeSending] = useState(false);
  const [invalidStyle, setInvalidStyle] = useState(false);
  const veryficationId = useSelector(
    (state) => state.registration.veryficationId,
  );
  const inputCode = useRef();

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

  function desplaySummary(event) {
    event.preventDefault();
    if (messageInTimeSending) return;
    setMessageInTimeSending(true);
    const veryficationCode = inputCode.current.value;
    axios
      .post(process.env.REACT_APP_LINK_TO_API + "/visit/veryfication", {
        veryficationId,
        veryficationCode,
      })
      .then((resp) => {
        navigate("/registration/summary");
      })
      .catch((error) => {
        toast.info("The code is incorrect");
        console.log(error);
      })
      .finally(() => {
        setMessageInTimeSending(false);
      });
  }

  return (
    <div className="containerInRegistration">
      <Back />
      <h4 className="mainTitle">{dataDefault.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: dataDefault.description }}
      ></p>
      <form
        className={`${style.form} ${invalidStyle ? style.invalidStyle : ""}`}
        onSubmit={desplaySummary}
      >
        <input
          type="text"
          placeholder="veryfication code"
          required="true"
          ref={inputCode}
        />
        <input
          type="submit"
          value="Next"
          disabled={messageInTimeSending}
          className="nextBtn"
          onClick={() => setInvalidStyle(true)}
        />
      </form>
    </div>
  );
};
export default Veryfication;
