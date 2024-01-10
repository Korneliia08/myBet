import style from "./WorkingDays.module.css";

const WorkingDays = (props) => {
  const workDays = props.data;
  if (!workDays) {
    return <h3>loading....</h3>;
  }
  return (
    <div className={style.containerAllDays}>
      <span className={workDays.monday ? "" : style.noActive}>Mo</span>
      <span className={workDays.tuesday ? "" : style.noActive}>Tu</span>
      <span className={workDays.wednesday ? "" : style.noActive}>We</span>
      <span className={workDays.thursday ? "" : style.noActive}>Th</span>
      <span className={workDays.friday ? "" : style.noActive}>Fr</span>
      <span className={workDays.saturday ? "" : style.noActive}>St</span>
      <span className={workDays.sunday ? "" : style.noActive}>Sn</span>
    </div>
  );
};
export default WorkingDays;
