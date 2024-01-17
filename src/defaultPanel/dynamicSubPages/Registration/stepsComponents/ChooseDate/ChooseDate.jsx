import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./ChooseDate.module.css";
import DateCard from "./DateCard/DateCard";
import { useSelector } from "react-redux";

const ChooseDate = () => {
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.chooseAdate,
  );
  const data = useSelector((state) => state.registration);
  console.log(data);
  return (
    <div className="containerInRegistration">
      <Back />
      <h4 className="mainTitle">{dataDefault.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: dataDefault.description }}
      ></p>
      <div className={style.containerForDate}>
        <DateCard />
      </div>
    </div>
  );
};
export default ChooseDate;
