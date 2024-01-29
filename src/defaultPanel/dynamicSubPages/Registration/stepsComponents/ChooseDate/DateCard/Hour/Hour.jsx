import style from "./Hour.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../data/reducers/registrationReducer";
import { getHour } from "../../../../../../../pipes/getHours";

const Hour = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = props.data;
  const start = data.start;
  const end = data.end;

  function desplayBasicDate() {
    navigate("/registration/basicDate");
    dispatch(setData({ selectedDate: { start: start, end: end } }));
  }

  return (
    <div className={style.blockHour} onClick={desplayBasicDate}>
      <span className={style.hour}>
        {getHour(start)} <span>-</span> {getHour(end)}
      </span>
    </div>
  );
};
export default Hour;
