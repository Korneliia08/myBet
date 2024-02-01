import style from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { changeLetterColor } from "../../../../pipes/setColorLetter";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import toScroll from "../../../../pipes/toScroll";

const Nav = () => {
  const data = useSelector((state) => state.stateOfPage.stateOfPage.header.nav);
  const [isMenuResp, setMenuResp] = useState(false);

  function desplayMenuResponsive() {
    setMenuResp(true);
  }

  function closeMenuResponsive() {
    setMenuResp(false);
  }

  function handlerClick(event) {
    if (event.target.localName === "a") {
      closeMenuResponsive();
    }
  }

  function closeOuther(event) {
    if (!event.target.closest("#navDiv")) {
      closeMenuResponsive();
    }
  }

  useEffect(() => {
    document.addEventListener("click", closeOuther);

    return () => {
      document.removeEventListener("click", closeOuther);
    };
  }, []);
  return (
    <>
      <div className={style.emptyBlock}></div>
      <div
        id="navDiv"
        className={style.containerForTitleAndNav}
        onClick={handlerClick}
      >
        <Link to={"/"} className={style.h1Link}>
          <h1
            className={style.title}
            dangerouslySetInnerHTML={{ __html: changeLetterColor(data.logo) }}
          ></h1>
        </Link>
        <nav className={style.nav}>
          <div className={style.bigContainer}>
            <Link to={"/registration"}>registration</Link>
            <HashLink
              scroll={(element) => toScroll(element)}
              to="/#sectionEmployees"
              onClick={closeMenuResponsive}
            >
              employees
            </HashLink>
            <HashLink
              smooth
              to={"/#sectionAboutUs"}
              scroll={(element) => toScroll(element)}
            >
              about us/
            </HashLink>
            <HashLink
              smooth
              to={"/#sectionServices"}
              scroll={(element) => toScroll(element)}
            >
              services
            </HashLink>
            <HashLink
              to={"/#sectionPricing"}
              scroll={(element) => toScroll(element)}
            >
              pricing
            </HashLink>
            <HashLink to={"/#footer"} scroll={(element) => toScroll(element)}>
              contact
            </HashLink>
            <HashLink to={"/#footer"} scroll={(element) => toScroll(element)}>
              map
            </HashLink>
          </div>
          <div className={style.smallContainer} onClick={desplayMenuResponsive}>
            <FontAwesomeIcon icon={faBars} className={style.burger} />
          </div>
          <div
            style={{ top: isMenuResp ? "0" : "-600px" }}
            className={style.responsiveMenu}
          >
            <Link to={"/registration"}>registration</Link>
            <HashLink
              scroll={(element) => toScroll(element)}
              to="/#sectionEmployees"
            >
              employees
            </HashLink>
            <HashLink
              smooth
              to={"/#sectionAboutUs"}
              scroll={(element) => toScroll(element)}
            >
              about us
            </HashLink>
            <HashLink
              smooth
              to={"/#sectionServices"}
              scroll={(element) => toScroll(element)}
            >
              services
            </HashLink>
            <HashLink
              to={"/#sectionPricing"}
              scroll={(element) => toScroll(element)}
            >
              pricing
            </HashLink>
            <HashLink to={"/#footer"} scroll={(element) => toScroll(element)}>
              contact
            </HashLink>
            <HashLink to={"/#footer"} scroll={(element) => toScroll(element)}>
              map
            </HashLink>
            <span className={style.closeBtn} onClick={closeMenuResponsive}>
              X
            </span>
          </div>
          <HashLink
            to={"/#sectionWriteToUs"}
            scroll={(element) => toScroll(element)}
            className={`${style.writeToUs} pinkBtn`}
          >
            write to us
          </HashLink>
        </nav>
      </div>
    </>
  );
};
export default Nav;
