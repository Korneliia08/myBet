import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./ChooseService.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Service from "./Service/Service";
import axios from "axios";
import { setData } from "../../../../../data/reducers/registrationReducer";

const ChooseService = () => {
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.chooseAservice,
  );
  const navigate = useNavigate();
  const idOfEmployee = useSelector((state) => state.registration.idOfEmployee);
  const allServices = useSelector((state) => state.services.services);
  const servicesComponent = allServices
    .filter((service) => service.employees.indexOf(idOfEmployee) !== -1)
    .map((service, index) => (
      <Service data={service} key={index} index={index} />
    ));
  const totalSum = useSelector((state) => state.registration.totalPrice);
  const data = useSelector((state) => state.registration);
  const dispatch = useDispatch();

  function desplayChooseDate() {
    const dataForApi = {
      idOfEmployee: data.idOfEmployee,
      idOfServices: data.idOfServices,
    };
    axios
      .post(
        process.env.REACT_APP_LINK_TO_API + "/registerPage/visits/appointments",
        dataForApi,
      )
      .then((resp) => {
        navigate("/registration/date");
        dispatch(setData({ availableDates: resp.data.value }));
      });
  }

  return (
    <div className="containerInRegistration">
      <Back toEmployees={true} />
      <h4 className="mainTitle">{dataDefault.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: dataDefault.description }}
      ></p>
      <div className={style.containerForServices}>
        <div className={style.blockForHeadlines}>
          <span className={style.nr}>Nr</span>
          <span className={style.service}>Service</span>
          <span className={style.price}>Price</span>
          <span className={style.choose}>Choose</span>
        </div>
        {servicesComponent}
      </div>
      <div className={style.bottomPart}>
        <span className={style.totalSum}>
          Total sum: {totalSum}
          <span className={`${style.greenSpanForMoney} greenSpanForMoney`}>
            $
          </span>
        </span>
        <button className="nextBtn" onClick={desplayChooseDate}>
          Next
        </button>
      </div>
    </div>
  );
};
export default ChooseService;
