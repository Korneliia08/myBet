import style from "./DateCard.module.css";
import {useNavigate} from "react-router-dom";

const DateCard = () => {
    const navigate = useNavigate();

    function desplayBasicDate() {
        navigate("/registration/basicDate");
    }

    return (
        <>
            <h5 className={style.month}>
                September
            </h5>
            <div className={style.containerForDays}>
                <div className={style.blockDay}>
                    <span className={style.number}>1</span>
                    <span className={style.day}>Monday</span>
                </div>
                <div className={style.blockDay}>
                    <span className={style.number}>2</span>
                    <span className={style.day}>Tuesday</span>
                </div>
                <div className={style.blockDay}>
                    <span className={style.number}>3</span>
                    <span className={style.day}>Wednesday</span>
                </div>
                <div className={style.blockDay}>
                    <span className={style.number}>4</span>
                    <span className={style.day}>Thursday</span>
                </div>
                <div className={style.blockDay}>
                    <span className={style.number}>5</span>
                    <span className={style.day}>Friday</span>
                </div>
            </div>
            <div className={style.containerForHours}>
                <div className={style.blockHour} onClick={desplayBasicDate}>
                    <span className={style.hour}>10:00-11:00</span>
                </div>
                <div className={style.blockHour} onClick={desplayBasicDate}>
                    <span className={style.hour}>11:00-12:00</span>
                </div>
                <div className={style.blockHour} onClick={desplayBasicDate}>
                    <span className={style.hour}>12:00-13:00</span>
                </div>
                <div className={style.blockHour} onClick={desplayBasicDate}>
                    <span className={style.hour}>13:00-14:00</span>
                </div>
                <div className={style.blockHour} onClick={desplayBasicDate}>
                    <span className={style.hour}>14:00-15:00</span>
                </div>
                <div className={style.blockHour} onClick={desplayBasicDate}>
                    <span className={style.hour}>15:00-16:00</span>
                </div>
                <div className={style.blockHour} onClick={desplayBasicDate}>
                    <span className={style.hour}>16:00-17:00</span>
                </div>
                <div className={style.blockHour} onClick={desplayBasicDate}>
                    <span className={style.hour}>17:00-18:00</span>
                </div>
            </div>
        </>
    )
}
export default DateCard;
