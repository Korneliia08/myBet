import style from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { changeLetterColor } from "../../../../pipes/setColorLetter";

const Nav = () => {
  const data = useSelector((state) => state.stateOfPage.stateOfPage.header.nav);
  return (
    <>
      <div className={style.emptyBlock}></div>
      <div className={style.containerForTitleAndNav}>
        <h1
          className={style.title}
          dangerouslySetInnerHTML={{ __html: changeLetterColor(data.logo) }}
        ></h1>
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
          <Link to={"/rgdev"} className={`${style.writeToUs} pinkBtn`}>
            write to us
          </Link>
        </nav>
      </div>
    </>
  );
};
export default Nav;
