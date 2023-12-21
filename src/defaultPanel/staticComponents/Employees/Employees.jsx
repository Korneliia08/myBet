import style from "./Employees.module.css";
import employee1 from "../../assets/employee1.jpg";
import employee2 from "../../assets/employee2.jpg";
import employee3 from "../../assets/employee3.jpg";

const Employees = () => {
    return (
        <section className={style.sectionEmpoyees}>
            <div className={style.blockForTitle}>
                <h2 className={style.title}>our barbers</h2>
                <p className={style.content}>We employ only highly qualified barbers who are not just professionals,
                    but also enjoy maintaining the atmosphere of a classic barbershop.</p>
            </div>
            <div className={style.containerForCards}>
                <div className={style.cardOfEmploy}>
                    <img src={employee1} alt="image of emloyee"/>
                    <h3 className={style.nameSurname}>simon gili</h3>
                    <p className={style.information}>Simon has several years of experience in the barber industry.</p>
                </div>
                <div className={style.cardOfEmploy}>
                    <img src={employee2} alt="image of emloyee"/>
                    <h3 className={style.nameSurname}>simon phillips</h3>
                    <p className={style.information}>Simon has several years of experience in the barber industry.</p>
                </div>
                <div className={style.cardOfEmploy}>
                    <img src={employee3} alt="image of emloyee"/>
                    <h3 className={style.nameSurname}>matthew phillips</h3>
                    <p className={style.information}>Matthew has several years of experience in the barber industry.</p>
                </div>
            </div>
        </section>
    )
}
export default Employees;
