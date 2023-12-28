import style from "./AllEmployees.module.css";
import CardEmployee from "./CardEmployee/CardEmployee";
import ArrowBack from "../../components/ArrowBack/ArrowBack";

const AllEmployees = () => {
    return (
        <section className={style.section}>
            <h2 className={style.title}>Our barbers</h2>
            <p className={style.content}>We employ only highly qualified barbers who are not just professionals, but
                also enjoy maintaining the
                atmosphere of a classic barbershop.</p>
            <div className={style.container}>
                <CardEmployee/>
                <CardEmployee/>
                <CardEmployee/>
                <CardEmployee/>
                <CardEmployee/>
                <CardEmployee/>
                <CardEmployee/>
                <CardEmployee/>
            </div>
            <ArrowBack/>
        </section>
    )
}
export default AllEmployees;
