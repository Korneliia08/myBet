import style from "./WriteToUs.module.css";
import backgroundImage from "../../../assets/images/backgroundWriteToUs.jpg";
import Moustache from "../../../components/Moustache/Moustache";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const WriteToUs = () => {
  const data = useSelector((state) => state.stateOfPage.stateOfPage.getInTouch);
  const employees = useSelector((state) => state.employees.employees);
  const [invalidStyle, setInvalidStyle] = useState(false);
  const inputName = useRef();
  const inputSurname = useRef();
  const inputEmail = useRef();
  const selectPrefixOfPhone = useRef();
  const selectWhoEmployee = useRef();
  const inputNumberOfPhone = useRef();
  const message = useRef();

  const notifyError = () => toast.error("Wow so easy !");

  async function sendDataToApi(event) {
    event.preventDefault();
    const sendMessagePromise = axios
      .post(process.env.REACT_APP_LINK_TO_API + "/registerPage/writeToUs", {
        name: inputName.current.value,
        surname: inputSurname.current.value,
        email: inputEmail.current.value,
        message: message.current.value,
        numberOfPhone: `${selectPrefixOfPhone.current.value}-${inputNumberOfPhone.current.value}`,
        selectWhoEmployee: selectWhoEmployee.current.value,
      })
      .then((resp) => {})
      .catch((error) => {});

    await toast.promise(sendMessagePromise, {
      pending: "Sending a message....",
      success: "Your message has been sent 👌",
      error: "Your message has not been sent 🤯",
    });
  }

  return (
    <section className={style.container} id="sectionWriteToUs">
      <img src={backgroundImage} alt="backgorund" className={style.image} />
      <div className={style.blockForForm}>
        <h2 className="mainTitle">{data.title}</h2>
        <Moustache />
        <p className={style.content}>{data.shortDescription}</p>
        <form
          className={invalidStyle ? style.invalidStyle : ""}
          onSubmit={sendDataToApi}
        >
          <div className={style.groupe}>
            <select required="true" ref={selectWhoEmployee}>
              <option disabled={true}>Choose who you want to send to</option>
              <option value="bet">Bet</option>
              <option disabled={true}>Employees:</option>
              {employees.map((employee, index) => {
                return (
                  <option value={employee.id}>
                    {employee.firstname} {employee.lastname}
                  </option>
                );
              })}
            </select>
          </div>
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
              maxLength={9}
              minLength={9}
              pattern="[0-9]{9,9}"
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
