import style from "./Service.module.css";

const Service = () => {
    return (
        <div className={style.containerForService}>
            <div className={style.blockForTitlePrice}>
                <h4>Hair Cut</h4>
                <span>40$</span>
            </div>
            <p className={style.describe}>Barber is a person whose occupation is mainly to cut dress groom style and
                shave men.</p>
        </div>
    )
}
export default Service;
