import style from "./Employees.module.css";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import CardEmployee from "./CardEmployee/CardEmployee";

const Employees = () => {
    const navigate = useNavigate();
    const allEmployees = useSelector(state => state.employees.employees);
    const cardEmployee = allEmployees.slice(0, 3).map(employeeCard => <CardEmployee data={employeeCard}/>);

    function openSubPageAllEmployees() {
        navigate("/allEmployees");
    }

    return (
        <section className={style.sectionEmpoyees}>
            <div className={style.blockForTitle}>
                <h2 className={style.title}>our barbers</h2>
                <p className={style.content}>We employ only highly qualified barbers who are not just professionals,
                    but also enjoy maintaining the atmosphere of a classic barbershop.</p>
            </div>
            <div className={style.containerForCards}>
                {cardEmployee}
            </div>
            <button className={style.btnView} onClick={openSubPageAllEmployees}>view all team</button>
        </section>
    )
}
export default Employees;
