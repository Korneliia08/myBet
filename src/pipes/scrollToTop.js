import { toast } from "react-toastify";

export default function scrollToTop() {
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

  let positionScrollY = window.scrollY;
  intervalFun = setInterval(() => {
    if (positionScrollY > 19) {
      positionScrollY -= 40;
      window.scrollTo(0, positionScrollY);
    } else {
      clearEvent();
      clearInterval(intervalFun);
    }
  }, 1);
  setTimeout(() => {
    clearEvent();
    clearInterval(intervalFun);
  }, 2000);
}
