import style from "./OpeningHours.module.css";

const OpeningHours = () => {
    return (
        <div className={style.container}>
            <h3>Opening Hours</h3>
            <div className={style.block}>
                <span className={style.days}>Monday - Friday:</span>
                <span className={style.hours}>11:30am - 2:30pm</span>
            </div>
            <div className={style.block}>
                <span className={style.days}>Saturday – Monday:</span>
                <span className={style.hours}>9am – 8pm</span>
            </div>
        </div>
    )
}
export default OpeningHours;
