import style from "./Service.module.css";
import { maxLenght } from "../../../../../../pipes/maxLenght";

const Service = (props) => {
  const data = props.data;
  return (
    <div className={style.containerForService}>
      <div className={style.blockForTitlePrice}>
        <h4 className={style.titleService}>{data.title}</h4>
        <span className={style.price}>{data.price}zł</span>
      </div>
      <p
        className={style.describe}
        dangerouslySetInnerHTML={{ __html: maxLenght(data.description, 80) }}
      ></p>
    </div>
  );
};
export default Service;
