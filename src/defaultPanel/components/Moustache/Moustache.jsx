import style from "./Moustache.module.css";
import mustache from "../../assets/images/mustache.svg";

const Moustache = () => {
    return (
        <div className={style.container}>
            <div className={style.emptyBlock}></div>
            <img src={mustache} alt="image mustache"/>
            <div className={style.emptyBlock}></div>
        </div>
    )
}
export default Moustache;
