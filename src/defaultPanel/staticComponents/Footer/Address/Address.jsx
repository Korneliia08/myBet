import style from "./Address.module.css";

const Address = () => {
    return (
        <div className={style.container}>
            <h3>Address</h3>
            <span className={style.address}>962 Fifth Avenue, 3rd Floor New York, NY10022</span>
        </div>
    )
}
export default Address;
