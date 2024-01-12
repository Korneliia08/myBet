import style from "./Employees.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardEmployee from "./CardEmployee/CardEmployee";

const Employees = () => {
  const navigate = useNavigate();
  const allEmployees = useSelector((state) => state.employees.employees);
  const cardEmployee = allEmployees
    .slice(0, 3)
    .map((employeeCard) => <CardEmployee data={employeeCard} />);

  const data = useSelector((state) => state.stateOfPage.stateOfPage);
  console.log(data);

  function openSubPageAllEmployees() {
    navigate("/allEmployees");
  }

  return (
    <section className={style.sectionEmpoyees}>
      <div className={style.blockForTitle}>
        <h2 className={style.title}>our barbers</h2>
        <p
          className={style.content}
          dangerouslySetInnerHTML={{
            __html: data.descriptionOfEmpolyeeSubPage,
          }}
        ></p>
      </div>
      <div className={style.containerForCards}>{cardEmployee}</div>
      <button className={style.btnView} onClick={openSubPageAllEmployees}>
        view all team
      </button>
    </section>
  );
};
export default Employees;
