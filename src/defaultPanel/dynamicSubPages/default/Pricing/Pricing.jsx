import style from "./Pricing.module.css";
import CategoryService from "./CategoryService/CategoryService";

const Pricing = () => {
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
        </section>
    )
}
export default Pricing;
