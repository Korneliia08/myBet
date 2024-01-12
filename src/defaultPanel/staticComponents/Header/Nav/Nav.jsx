import style from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <>
      <div className={style.emptyBlock}></div>
      <div className={style.containerForTitleAndNav}>
        <h1 className={style.title}>
          Barbersh<span>o</span>p demo
        </h1>
        <nav className={style.nav}>
          <div className={style.bigContainer}>
            <Link to={"/registration"}>registration</Link>
            <Link to={"/"}>employees</Link>
            <Link to={"/"}>about us</Link>
            <Link to={"/"}>services</Link>
            <Link to={"/"}>pricing</Link>
            <Link to={"/"}>contact</Link>
            <Link to={"/rgdev"}>map</Link>
          </div>
          <div className={style.smallContainer}>
            <FontAwesomeIcon icon={faBars} className={style.burger} />
          </div>
          <Link to={"/rgdev"} className={style.btnWriteToUs}>
            write to us
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Nav;
