import style from "./Pricing.module.css";
import CategoryService from "./CategoryService/CategoryService";
import { useNavigate } from "react-router-dom";
import Moustache from "../../../components/Moustache/Moustache";
import { useSelector } from "react-redux";

const Pricing = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.stateOfPage.stateOfPage.pricing);

  function display() {
    navigate("/pricing");
  }

  return (
    <section className={style.sectionPricing} id="sectionPricing">
      <div className={style.blockForTitle}>
        <h2 className="mainTitle">{data.title}</h2>
        <Moustache />
      </div>
      <div className={style.containerForCategories}>
        <CategoryService />
        <CategoryService />
        <CategoryService />
      </div>
      <button onClick={display} className="pinkBtn">
        Show more
      </button>
    </section>
  );
};
export default Pricing;
