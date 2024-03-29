import style from "./CardOfEmployee.module.css";
import { useNavigate } from "react-router-dom";
import WorkingDays from "../../../../../components/WorkingDays/WorkingDays";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../data/reducers/registrationReducer";
import { maxLenght } from "../../../../../../pipes/maxLenght";

const CardOfEmployee = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const idOfEmployee = props.idOfEmployee;
  const dispatch = useDispatch();

  function desplayChooseAService() {
    navigate("/registration/service");
    dispatch(
      setData({
        idOfEmployee: data.id,
        idOfServices: [],
        totalPrice: "0",
      }),
    );
  }

  return (
    <div
      onClick={desplayChooseAService}
      className={`${style.container} ${
        idOfEmployee === data.id.toString() ? style.selectedEmployee : ""
      }`}
    >
      <div className={style.blockForImage}>
        <img
          src={process.env.REACT_APP_IMAGE_LINK + data.profilImageId}
          alt={`${data.firstname} ${data.lastname}`}
        />
        <img
          src={process.env.REACT_APP_IMAGE_LINK + data.profilImageId}
          alt=""
          className={style.background}
        />
      </div>
      <div className={style.rightPart}>
        <h5>{maxLenght(`${data.firstname} ${data.lastname}`, 20 - 2, true)}</h5>
        <WorkingDays data={data.workDay} />
        <button onClick={desplayChooseAService}>Choose</button>
      </div>
    </div>
  );
};
export default CardOfEmployee;
