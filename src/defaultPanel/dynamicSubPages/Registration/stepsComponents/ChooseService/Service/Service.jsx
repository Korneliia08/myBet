import style from "./Service.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addService,
  counterTotalSum,
  deleteService,
} from "../../../../../../data/reducers/registrationReducer";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { maxLenght } from "../../../../../../pipes/maxLenght";

const Service = (props) => {
  const data = props.data;
  let counter = props.index;
  const dispatch = useDispatch();
  const choosedServices = useSelector(
    (state) => state.registration.idOfServices,
  );
  const inputRef = useRef();
  const navigate = useNavigate();

  function addToChoosedServices(event) {
    if (event.target.checked) {
      dispatch(addService(data.id));
      dispatch(counterTotalSum(data.price));
    } else {
      dispatch(deleteService(data.id));
      dispatch(counterTotalSum(-data.price));
    }
  }

  function desplayService() {
    navigate(`/service/${data.id}`);
  }

  useEffect(() => {
    if (choosedServices.indexOf(data.id) !== -1) {
      inputRef.current.checked = true;
    }
  }, []);

  function togleInput(event) {
    if (event.target.localName !== "input") {
      inputRef.current.click();
    }
  }

  return (
    <>
      <tr className={style.container} onClick={togleInput}>
        <td className={style.spanId}>{++counter}.</td>
        <td className={style.serviceTitle}>
          {maxLenght(data.title, 70)}
          <FontAwesomeIcon
            icon={faInfo}
            className={`${style.icon} ${style.infoIcon}`}
            onClick={desplayService}
          />
        </td>
        <td className={style.spanPrice}>
          {data.price}
          <span className="greenSpanForMoney">$</span>
        </td>
        <td>
          <input
            type="checkbox"
            ref={inputRef}
            onChange={addToChoosedServices}
          />
        </td>
      </tr>
      <tr className={style.emptyRow}>
        <td></td>
      </tr>
    </>
  );
};
export default Service;
