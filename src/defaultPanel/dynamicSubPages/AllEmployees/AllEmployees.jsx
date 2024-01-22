import style from "./AllEmployees.module.css";
import CardEmployee from "./CardEmployee/CardEmployee";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import Moustache from "../../components/Moustache/Moustache";
import { useSelector } from "react-redux";

const AllEmployees = () => {
  const allEmployees = useSelector((state) => state.employees.employees);
  const data = useSelector((state) => state.stateOfPage.stateOfPage.employees);
  const cardEmployee = allEmployees.map((employee, index) => (
    <CardEmployee data={employee} key={index} />
  ));
  return (
    <section className="containerSubPage">
      <h2 className="mainTitle">{data.title}</h2>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: data.shortDescription }}
      ></p>
      <div className={style.container}>{cardEmployee}</div>
      <ArrowBack />
    </section>
  );
};
export default AllEmployees;
