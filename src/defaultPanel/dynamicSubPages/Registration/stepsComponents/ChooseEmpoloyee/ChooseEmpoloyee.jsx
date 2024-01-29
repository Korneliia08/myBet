import style from "./ChooseEmpoloyee.module.css";
import CardOfEmployee from "./CardOfEmployee/CardOfEmployee";
import Moustache from "../../../../components/Moustache/Moustache";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChooseEmpoloyee = () => {
  const data = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.chooseAemployee,
  );
  let { idOfEmployee } = useParams();
  const employees = useSelector((state) => state.employees.employees);
  const cardOfEmployee = employees.map((employee, index) => (
    <CardOfEmployee data={employee} idOfEmployee={idOfEmployee} key={index} />
  ));
  const noCards = <h3 className="messageWhenEmpty">No employees</h3>;
  return (
    <div className="containerInRegistration">
      <h4 className="mainTitle">{data.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></p>
      <div className={style.blockForCards}>
        {cardOfEmployee.length ? cardOfEmployee : noCards}
      </div>
    </div>
  );
};
export default ChooseEmpoloyee;
