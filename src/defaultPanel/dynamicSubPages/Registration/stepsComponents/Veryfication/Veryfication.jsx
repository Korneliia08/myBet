import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./Veryfication.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Veryfication = () => {
  const navigate = useNavigate();
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.veryfication,
  );

  function desplaySummary(event) {
    event.preventDefault();
    navigate("/registration/summary");
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
      <form className={style.form}>
        <input type="text" placeholder="veryfication code" />
        <input
          type="submit"
          value="Next"
          className="nextBtn"
          onClick={desplaySummary}
        />
      </form>
    </div>
  );
};
export default Veryfication;
