import style from "./Back.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Back = (props) => {
  const navigate = useNavigate();
  const toEmployees = props.toEmployees;

  function backOneStep() {
    if (toEmployees) {
      navigate("/registration/employee");
      return;
    }
    navigate(-1);
  }

  return (
    <span className={style.back} onClick={backOneStep}>
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </span>
  );
};
export default Back;
