import style from "./AllEmployees.module.css";
import CardEmployee from "./CardEmployee/CardEmployee";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import Moustache from "../../components/Moustache/Moustache";
import {useSelector} from "react-redux";

const AllEmployees = () => {
    const allEmployees = useSelector(state => state.employees.employees);
    const cardEmployee = allEmployees.map(employee => <CardEmployee data={employee}/>);
    return (
        <section className="containerSubPage">
            <h2 className="mainTitle">Our barbers</h2>
            <Moustache/>
            <p className="describeUnderTitle">We employ only highly qualified barbers who are not just professionals,
                but
                also enjoy maintaining the
                atmosphere of a classic barbershop.</p>
            <div className={style.container}>
                {cardEmployee}
            </div>
            <ArrowBack/>
        </section>
    )
}
export default AllEmployees;
