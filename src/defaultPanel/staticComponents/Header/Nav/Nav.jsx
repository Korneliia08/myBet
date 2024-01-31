import style from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { changeLetterColor } from "../../../../pipes/setColorLetter";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const Nav = () => {
  const data = useSelector((state) => state.stateOfPage.stateOfPage.header.nav);
  const [isMenuResp, setMenuResp] = useState(false);

  function desplayMenuResponsive() {
    setMenuResp(true);
  }

  function closeMenuResponsive() {
    setMenuResp(false);
  }

  function toScroll(element) {
    const yCoordinate =
      element.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    let positionScrollY = window.scrollY;
    if (positionScrollY < yCoordinate + yOffset) {
      const intervalFun = setInterval(() => {
        if (positionScrollY < yCoordinate + yOffset) {
          positionScrollY += 20;
          window.scrollTo(0, positionScrollY);
        } else {
          clearInterval(intervalFun);
          window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
        }
      }, 1);
    } else {
      const intervalFun = setInterval(() => {
        if (positionScrollY > yCoordinate + yOffset) {
          positionScrollY -= 20;
          window.scrollTo(0, positionScrollY);
        } else {
          clearInterval(intervalFun);
          window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
        }
      }, 1);
    }
  }

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
