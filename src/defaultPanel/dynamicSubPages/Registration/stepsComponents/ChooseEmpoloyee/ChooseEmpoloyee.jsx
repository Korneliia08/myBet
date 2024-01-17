import style from "./ChooseEmpoloyee.module.css";
import CardOfEmployee from "./CardOfEmployee/CardOfEmployee";
import Moustache from "../../../../components/Moustache/Moustache";
import { useSelector } from "react-redux";

const ChooseEmpoloyee = () => {
  const data = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.chooseAemployee,
  );
  const employees = useSelector((state) => state.employees.employees);
  const cardOfEmployee = employees.map((employee) => (
    <CardOfEmployee data={employee} />
  ));
  return (
    <div className="containerInRegistration">
      <h4 className="mainTitle">{data.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></p>
      <div className={style.blockForCards}>{cardOfEmployee}</div>
    </div>
  );
};
export default ChooseEmpoloyee;
