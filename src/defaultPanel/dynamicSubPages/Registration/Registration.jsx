import style from "./Registration.module.css";
import Steps from "./Steps/Steps";
import {Outlet} from "react-router-dom";

const Registration = () => {
    return (
        <div className={style.container}>
            <Steps/>
            <Outlet></Outlet>
        </div>
    )
}
export default Registration;
