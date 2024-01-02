import style from "./Steps.module.css";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";

const Steps = () => {
    return (
        <div className={style.container}>
            <h3>1 of 6</h3>
            <span className="mainTitle">steps</span>
            <ArrowBack/>
        </div>
    )
}
export default Steps;
