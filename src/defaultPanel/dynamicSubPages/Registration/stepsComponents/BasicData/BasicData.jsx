import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./BasicData.module.css";
import FormBasicData from "./FormBasicData/FormBasicData";
import Summary from "./Summary/Summary";
import { useSelector } from "react-redux";

const BasicData = () => {
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.basicData,
  );
  return (
    <div className="containerInRegistration">
      <Back />
      <h4 className="mainTitle">{dataDefault.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: dataDefault.description }}
      ></p>
      <div className={style.containerForSummaryAndForm}>
        <Summary />
        <FormBasicData />
      </div>
    </div>
  );
};
export default BasicData;
