import style from "./Day.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../../../../../data/reducers/registrationReducer";
import { useEffect, useState } from "react";

const Day = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);
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
  const selectedDay = useSelector((state) => state.registration.selectedDay);

  useEffect(() => {
    if (selectedDay !== "") {
      const day = selectedDay.getDate();
      setSelected(day === new Date(data).getDate());
    }
  }, [selectedDay]);

  function desplayHours() {
    dispatch(setData({ selectedDay: data }));
  }

  return (
    <div
      className={`${style.blockDay} ${selected ? style.selectedDay : ""}`}
      onClick={desplayHours}
    >
      <span className={style.number}>{dayOfMonth}</span>
      <span className={style.day}>{titleOfDay}</span>
    </div>
  );
};
export default Day;
