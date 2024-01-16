import style from "./Hour.module.css";
import { useNavigate } from "react-router-dom";

const Hour = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const start = data.start;
  const end = data.end;

  const startTime = new Date(start).toLocaleString();
  let startHour = startTime.split(" ")[1];
  startHour = startHour.slice(0, 5);

  const endOfVisit = new Date(end).toLocaleString();
  let endTimeOfVisit = endOfVisit.split(" ")[1];
  endTimeOfVisit = endTimeOfVisit.slice(0, 5);

  function desplayBasicDate() {
    navigate("/registration/basicDate");
  }

  return (
    <div className={style.blockHour} onClick={desplayBasicDate}>
      <span className={style.hour}>
        {startHour}-{endTimeOfVisit}
      </span>
    </div>
  );
};
export default Hour;
