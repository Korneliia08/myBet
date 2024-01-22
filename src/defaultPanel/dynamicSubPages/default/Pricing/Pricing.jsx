import style from "./Pricing.module.css";
import CategoryService from "./CategoryService/CategoryService";
import { useNavigate } from "react-router-dom";
import Moustache from "../../../components/Moustache/Moustache";
import { useSelector } from "react-redux";

const Pricing = () => {
  const navigate = useNavigate();
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.pricing,
  );
  const data = useSelector((state) => state.services.services);
  const categories = [];
  data.forEach((service) => {
    if (categories.indexOf(service.category) === -1) {
      categories.push(service.category);
    }
  });

  const allCategories = categories.map((category, index) => {
    return (
      <CategoryService
        data={data.filter((service) => service.category === category)}
        key={index}
      />
    );
  });

  function display() {
    navigate("/pricing");
  }

  return (
    <section className={style.sectionPricing} id="sectionPricing">
      <div className={style.blockForTitle}>
        <h2 className="mainTitle">{dataDefault.title}</h2>
        <Moustache />
      </div>
      <div className={style.containerForCategories}>{allCategories}</div>
      <button onClick={display} className="pinkBtn">
        Show more
      </button>
    </section>
  );
};
export default Pricing;
