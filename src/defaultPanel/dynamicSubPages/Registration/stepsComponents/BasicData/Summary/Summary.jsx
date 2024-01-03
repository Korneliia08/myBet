import style from "./Summary.module.css";

const Summary = () => {
    return (
        <div className={style.container}>
            <div className={style.blockOfInformation}>
                <h5>
                    Service/Services:
                </h5>
                <span>Traditional Haircut</span>
            </div>
            <div className={style.blockOfInformation}>
                <h5>
                    Barber:
                </h5>
                <span>Matthew Phillips</span>
            </div>
            <div className={style.blockOfInformation}>
                <h5>
                    Date:
                </h5>
                <span>September 12 (12:00 - 13:00)</span>
            </div>
        </div>
    )
}
export default Summary;
