import style from "./Day.module.css";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../data/reducers/registrationReducer";

const Day = (props) => {
  const dispatch = useDispatch();
  const data = props.data;
  const dayOfMonth = data.getDate();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const titleOfDay = dayOfWeek[data.getDay()];

  function desplayHours() {
    dispatch(setData({ selectedDay: data }));
  }

  return (
    <div className={style.blockDay} onClick={desplayHours}>
      <span className={style.number}>{dayOfMonth}</span>
      <span className={style.day}>{titleOfDay}</span>
    </div>
  );
};
export default Day;
