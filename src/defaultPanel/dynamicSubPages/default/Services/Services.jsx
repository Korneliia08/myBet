import style from "./Services.module.css";
import Moustache from "../../../components/Moustache/Moustache";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    return (
        <section className={style.container}>
            <div className={style.blockForTitle}>
                <h2 className="mainTitle">Our Barber Services</h2>
                <Moustache/>
            </div>
            <div className={style.containerForServicesCard}>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </section>
    )
}
export default Services;
