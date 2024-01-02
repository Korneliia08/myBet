import style from "./Nav.module.scss";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className={style.containerForTitleAndNav}>
            <h1 className={style.title}>Barbersh<span>o</span>p demo</h1>
            <nav className={style.nav}>
                <Link to={"/registration"}>registration</Link>
                <Link to={"/"}>employees</Link>
                <Link to={"/"}>about us</Link>
                <Link to={"/"}>services</Link>
                <Link to={"/"}>pricing</Link>
                <Link to={"/"}>contact</Link>
                <Link to={"/rgdev"}>map</Link>
                <Link to={"/rgdev"} className={style.btnWriteToUs}>write to us</Link>
            </nav>
        </div>
    )
}
export default Nav;
