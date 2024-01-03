import style from "./WorkingDays.module.css";

const WorkingDays = () => {
    return (
        <div className={style.containerAllDays}>
            <span>Mo</span>
            <span className={style.noActive}>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span className={style.noActive}>St</span>
            <span>Sn</span>
        </div>
    )
}
export default WorkingDays;
