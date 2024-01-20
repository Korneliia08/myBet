import style from "./CategoryService.module.css";
import Service from "./Service/Service";

const CategoryService = (props) => {
  const data = props.data;
  const services = data.map((service) => <Service data={service} />);
  return (
    <div className={style.categoryCard}>
      <h3 className={style.titleCategory}>{data[0].category}</h3>
      {services}
    </div>
  );
};
export default CategoryService;
