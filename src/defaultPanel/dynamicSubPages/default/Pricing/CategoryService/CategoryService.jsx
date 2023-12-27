import style from "./CategoryService.module.css";
import Service from "./Service/Service";

const CategoryService = () => {
    return (
        <div className={style.categoryCard}>
            <h3 className={style.titleCategory}>Hair styling</h3>
            <Service/>
            <Service/>
            <Service/>
        </div>
    )
}
export default CategoryService;
