import Nav from "./Nav/Nav";
import style from "./Header.module.css";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    function displayRegistration() {
        navigate("/registration");
    }

    return (
        <header className={style.header}>
            <Nav/>
            <div className={style.container}>
                <h1 className={style.title}>Enjoy our barber services</h1>
                <p className={style.content}>Establish your new amazing look with Barbershop services! From haircuts to
                    hot shaves, you can
                    experience the best level of barbering in the area.</p>
                <button className={style.btnBookNow} onClick={displayRegistration}>Book now</button>
            </div>
        </header>
    )
}
export default Header;
