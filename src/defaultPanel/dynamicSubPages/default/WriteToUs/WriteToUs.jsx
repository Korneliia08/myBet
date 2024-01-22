import style from "./WriteToUs.module.css";
import backgroundImage from "../../../assets/images/backgroundWriteToUs.jpg";
import Moustache from "../../../components/Moustache/Moustache";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import axios from "axios";

const WriteToUs = () => {
  const data = useSelector((state) => state.stateOfPage.stateOfPage.getInTouch);
  const [invalidStyle, setInvalidStyle] = useState(false);
  const inputName = useRef();
  const inputSurname = useRef();
  const inputEmail = useRef();
  const selectPrefixOfPhone = useRef();
  const inputNumberOfPhone = useRef();
  const message = useRef();

  function sendDataToApi() {
    axios
      .post(process.env.REACT_APP_LINK_TO_API + "/registerPage/writeToUs", {
        name: inputName.current.value,
        surname: inputSurname.current.value,
        email: inputEmail.current.value,
        message: message.current.value,
        numberOfPhone: `${selectPrefixOfPhone.current.value}-${inputNumberOfPhone.current.value}`,
      })
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  }

  return (
    <section className={style.container}>
      <img src={backgroundImage} alt="backgorund" className={style.image} />
      <div className={style.blockForForm}>
        <h2 className="mainTitle">{data.title}</h2>
        <Moustache />
        <p className={style.content}>{data.shortDescription}</p>
        <form
          className={invalidStyle ? style.invalidStyle : ""}
          onSubmit={sendDataToApi}
        >
          <input
            type="text"
            placeholder="Name"
            required="true"
            ref={inputName}
          />
          <input
            type="text"
            placeholder="Surname"
            required="true"
            ref={inputSurname}
          />
          <input
            type="email"
            placeholder="E-mail"
            required="true"
            ref={inputEmail}
          />
          <div className={style.groupe}>
            <select required="true" ref={selectPrefixOfPhone}>
              <option value="+48">+48</option>
              <option value="+380">+380</option>
            </select>
            <input
              type="text"
              placeholder="Phone"
              required="true"
              ref={inputNumberOfPhone}
            />
          </div>
          <textarea
            placeholder="Message"
            required="true"
            ref={message}
          ></textarea>
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
