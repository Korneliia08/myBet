import style from "./Employees.module.css";
import employee1 from "../../../assets/employee1.jpg";
import employee2 from "../../../assets/employee2.jpg";
import employee3 from "../../../assets/employee3.jpg";
import CardEmployee from "./CardEmployee/CardEmployee";
import {useNavigate} from "react-router-dom";

const Employees = () => {
    const navigate = useNavigate();

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
                <CardEmployee data={employee1}/>
                <CardEmployee data={employee2}/>
                <CardEmployee data={employee3}/>
            </div>
            <button className={style.btnView} onClick={openSubPageAllEmployees}>view all team</button>
        </section>
    )
}
export default Employees;
