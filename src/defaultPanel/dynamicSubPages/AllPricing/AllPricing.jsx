import ArrowBack from "../../components/ArrowBack/ArrowBack";
import Moustache from "../../components/Moustache/Moustache";

const AllPricing = () => {
    return (
        <section className="containerSubPage">
            <h2 className="mainTitle">Our pricing</h2>
            <Moustache/>
            <p className="describeUnderTitle">We employ only highly qualified barbers who are not just professionals,
                but
                also enjoy maintaining the
                atmosphere of a classic barbershop.</p>
            <ArrowBack/>
        </section>
    )
}
export default AllPricing;
