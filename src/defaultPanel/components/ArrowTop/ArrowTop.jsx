import style from "./ArrowTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ArrowTop = () => {
  const [scrollYLocation, setscrollYLocation] = useState();

  function getPosition() {
    setscrollYLocation(window.scrollY);
  }

  function scrollToTop() {
    let positionScrollY = window.scrollY;
    const intervalFun = setInterval(() => {
      if (positionScrollY > 0) {
        positionScrollY -= 28;
        window.scrollTo(0, positionScrollY);
      } else {
        clearInterval(intervalFun);
      }
    }, 5);
  }

  useEffect(() => {
    window.addEventListener("scroll", getPosition);
  }, []);
  return (
    <div
      className={`${style.container} ${
        scrollYLocation < 150 ? "" : style.showScroll
      }`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} className={style.arrowTop} />
    </div>
  );
};
export default ArrowTop;
