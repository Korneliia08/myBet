import style from "./Steps.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeIcon from "../../../components/HomeIcon/HomeIcon";

const Steps = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);

  function setStepFun() {
    switch (location.pathname) {
      case "/registration/employee":
        setStep(1);
        break;
      case "/registration/service":
        setStep(2);
        break;
      case "/registration/date":
        setStep(3);
        break;
      case "/registration/basicDate":
        setStep(4);
        break;
      case "/registration/veryfication":
        setStep("prawie juz");
        break;
      // case "/registration/summary":
      //     setStepFun(1);
      //     break;
      // default:
      //     setStepFun(1);
    }
  }

  useEffect(() => {
    setStepFun();
  }, [location]);
  return (
    <div className={style.container}>
      <HomeIcon />
      <h3>{step} of 4</h3>
      <span className="mainTitle">steps</span>
    </div>
  );
};
export default Steps;
