import style from "./Pricing.module.css";
import CategoryService from "./CategoryService/CategoryService";
import {useNavigate} from "react-router-dom";

const Pricing = () => {
    const navigate = useNavigate();

    function display() {
        navigate("/pricing");
    }

    return (
        <section className={style.sectionPricing}>
            <div className={style.blockForTitle}>
                <h2 className={style.title}>Our Barber Pricing</h2>
            </div>
            <div className={style.containerForCategories}>
                <CategoryService/>
                <CategoryService/>
                <CategoryService/>
            </div>
            <button onClick={display} className={style.btnShowMore}>Show more</button>
        </section>
    )
}
export default Pricing;
