import style from "./Headquaters.module.css";

const Headquaters = () => {
    return (
        <div className={style.container}>
            <h3>Headquaters</h3>
            <span className={style.address}>962 Fifth Avenue, 3rd Floor New York, NY10022</span>
            <span className={style.email}>info@example.com</span>
            <span className={style.phone}>(+123) 456 789 101</span>
        </div>
    )
}
export default Headquaters;
