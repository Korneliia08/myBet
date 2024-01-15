import style from "./HomeIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const HomeIcon = () => {
  const navigate = useNavigate();

  function toLinkToHome() {
    navigate("/");
  }

  return (
    <div className={style.container}>
      <FontAwesomeIcon icon={faHouseUser} onClick={toLinkToHome} />
    </div>
  );
};
export default HomeIcon;
