import style from "./FormBasicData.module.css";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../../../../../data/reducers/registrationReducer";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const FormBasicData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputName = useRef();
  const inputSurName = useRef();
  const inputEmail = useRef();
  const inputNumberOfPhone = useRef();
  const inputPrefixOfPhone = useRef();
  const data = useSelector((state) => state.registration);
  const [reCaptcha, setReCaptcha] = useState(null);
  const [isReCaptchaClick, setIsReCaptchaClick] = useState(false);

  const [messageInTimeSending, setMessageInTimeSending] = useState(false);
  const [invalidStyle, setInvalidStyle] = useState(false);

  function desplayVeryfication(event) {
    event.preventDefault();
    if (messageInTimeSending) return;
    setMessageInTimeSending(true);
    setIsReCaptchaClick(false);
    if (reCaptcha == null) {
      setIsReCaptchaClick(true);
      return;
    }
    dispatch(
      setData({
        dataOfUser: getDataFromForm(),
      }),
    );
    axios
      .post(process.env.REACT_APP_LINK_TO_API + "/visit/book", {
        idOfEmployee: data.idOfEmployee,
        idOfServices: data.idOfServices,
        selectedDate: data.selectedDate,
        dataOfUser: data.dataOfUser,
        reCaptcha: reCaptcha,
      })
      .then((resp) => {
        dispatch(setData({ veryficationId: resp.data.value }));
        navigate("/registration/veryfication");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setMessageInTimeSending(false);
      });
  }

  function getDataFromForm() {
    return {
      name: inputName.current.value,
      surname: inputSurName.current.value,
      prefixOfPhone: inputPrefixOfPhone.current.value,
      numberOfPhone: inputNumberOfPhone.current.value,
      email: inputEmail.current.value,
    };
  }

  function onChangeReCaptcha(value) {
    setIsReCaptchaClick(false);
    setReCaptcha(value);
  }

  return (
    <div className={style.container}>
      <form
        className={invalidStyle ? style.invalidStyle : ""}
        onSubmit={desplayVeryfication}
      >
        <div className={style.groupOfInputs}>
          <input
            type="text"
            placeholder="First name"
            ref={inputName}
            required={true}
            className={style.inputStyle}
          />
          <input
            type="text"
            placeholder="Second name"
            ref={inputSurName}
            required={true}
            className={style.inputStyle}
          />
        </div>
        <div className={style.groupOfInputs}>
          <div className={style.blockForNumberOfPhone}>
            <select
              ref={inputPrefixOfPhone}
              required={true}
              className={style.selectStyle}
            >
              <option value="+48">+48</option>
              <option value="+380">+380</option>
            </select>
            <input
              type="text"
              placeholder="Number of phone"
              ref={inputNumberOfPhone}
              required={true}
              className={style.inputStyle}
              maxLength={9}
              minLength={9}
              pattern="[0-9]{9,9}"
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            ref={inputEmail}
            required={true}
            className={style.inputStyle}
          />
        </div>
        <input
          type="submit"
          value="Book Now"
          className="btnBook"
          disabled={messageInTimeSending}
          onClick={() => setInvalidStyle(true)}
        />
        {/*sitekey="6Ldx_1MpAAAAAICoyhuEgTNU7-nICGtvPQcIZfBn"*/}
      </form>
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChangeReCaptcha}
      />
      <span
        style={{ opacity: isReCaptchaClick ? "1" : "0" }}
        className={style.spanConfirm}
      >
        Confirm that you are not a robot!
      </span>
    </div>
  );
};
export default FormBasicData;
