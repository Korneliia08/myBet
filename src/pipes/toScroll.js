import { toast } from "react-toastify";

export default function toScroll(element) {
  let intervalFun;
  const eventHandler = () => {
    toast.info("You are fight with scroll");
    toast.success("You WIN");
    clearInterval(intervalFun);
    clearEvent();
  };
  document.addEventListener("wheel", eventHandler);
  const clearEvent = () => {
    document.removeEventListener("wheel", eventHandler);
  };

  const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -50;
  let positionScrollY = window.scrollY;
  if (positionScrollY < yCoordinate + yOffset) {
    intervalFun = setInterval(() => {
      if (positionScrollY < yCoordinate + yOffset) {
        positionScrollY += 40;
        window.scrollTo(0, positionScrollY);
      } else {
        clearInterval(intervalFun);
        clearEvent();
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
      }
    }, 1);
  } else {
    intervalFun = setInterval(() => {
      if (positionScrollY > yCoordinate + yOffset) {
        positionScrollY -= 40;
        window.scrollTo(0, positionScrollY);
      } else {
        clearInterval(intervalFun);
        clearEvent();
        window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
      }
    }, 1);
  }
  setTimeout(() => {
    clearEvent();
    clearInterval(intervalFun);
  }, 2000);
}
