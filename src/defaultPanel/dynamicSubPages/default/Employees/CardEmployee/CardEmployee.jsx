import style from "./CardEmployee.module.css";

const CardEmployee = (props) => {
    const image = props.data;
    return (
        <div className={style.cardOfEmployee}>
            <img src={image} alt="image of emloyee"/>
            <h3 className={style.nameSurname}>simon gili</h3>
            <p className={style.information}>Simon has several years of experience in the barber industry.</p>
        </div>
    )
}
export default CardEmployee;
