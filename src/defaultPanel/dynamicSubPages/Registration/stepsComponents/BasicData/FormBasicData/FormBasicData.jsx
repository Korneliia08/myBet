import style from "./FormBasicData.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../data/reducers/registrationReducer";

const FormBasicData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputName = useRef();
  const inputSurName = useRef();
  const inputEmail = useRef();
  const inputNumberOfPhone = useRef();
  const inputPrefixOfPhone = useRef();

  function desplayVeryfication(event) {
    event.preventDefault();
    navigate("/registration/veryfication");
    dispatch(
      setData({
        dataOfUser: getDataFromForm(),
      }),
    );
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

  return (
    <div className={style.container}>
      <form>
        <div className={style.groupOfInputs}>
          <input type="text" placeholder="First name" ref={inputName} />
          <input type="text" placeholder="Second name" ref={inputSurName} />
        </div>
        <div className={style.groupOfInputs}>
          <div className={style.blockForNumberOfPhone}>
            <select ref={inputPrefixOfPhone}>
              <option value="+48">+48</option>
              <option value="+380">+380</option>
            </select>
            <input
              type="text"
              placeholder="Number of phone"
              ref={inputNumberOfPhone}
            />
          </div>
          <input type="text" placeholder="E-mail" ref={inputEmail} />
        </div>
        <input
          type="submit"
          value="Book Now"
          className="btnBook"
          onClick={desplayVeryfication}
        />
      </form>
    </div>
  );
};
export default FormBasicData;
