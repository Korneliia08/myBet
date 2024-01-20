import style from "./WriteToUs.module.css";
import backgroundImage from "../../../assets/images/backgroundWriteToUs.jpg";
import Moustache from "../../../components/Moustache/Moustache";
import { useSelector } from "react-redux";
import { useState } from "react";

const WriteToUs = () => {
  const data = useSelector((state) => state.stateOfPage.stateOfPage.getInTouch);
  const [invalidStyle, setInvalidStyle] = useState(false);
  return (
    <section className={style.container}>
      <img
        src={backgroundImage}
        alt="image of backgorund"
        className={style.image}
      />
      <div className={style.blockForForm}>
        <h2 className="mainTitle">{data.title}</h2>
        <Moustache />
        <p className={style.content}>{data.shortDescription}</p>
        <form className={invalidStyle ? style.invalidStyle : ""}>
          <input type="text" placeholder="Name" required="true" />
          <input type="text" placeholder="Surname" required="true" />
          <input type="email" placeholder="E-mail" required="true" />
          <div className={style.groupe}>
            <select required="true">
              <option value="+48">+48</option>
              <option value="+380">+380</option>
            </select>
            <input type="text" placeholder="Phone" required="true" />
          </div>
          <textarea placeholder="Message" required="true"></textarea>
          <input
            type="submit"
            value="send request"
            className={style.submit}
            onClick={() => setInvalidStyle(true)}
          />
        </form>
      </div>
    </section>
  );
};
export default WriteToUs;
