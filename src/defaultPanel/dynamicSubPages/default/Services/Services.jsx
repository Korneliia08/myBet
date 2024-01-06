import style from "./Services.module.css";
import Moustache from "../../../components/Moustache/Moustache";
import {useSelector} from "react-redux";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    const allServices = useSelector(state => state.services.services);
    const serviceCard = allServices.map(service => <ServiceCard data={service}/>);
    return (
        <section className={style.container}>
            <div className={style.blockForTitle}>
                <h2 className="mainTitle">Our Barber Services</h2>
                <Moustache/>
            </div>
            <div className={style.containerForServicesCard}>
                {serviceCard}
            </div>
        </section>
    )
}
export default Services;
