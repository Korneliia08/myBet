import Back from "../../../../components/Back/Back";
import Moustache from "../../../../components/Moustache/Moustache";
import style from "./ChooseService.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Service from "./Service/Service";
import axios from "axios";
import { setData } from "../../../../../data/reducers/registrationReducer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import scrollToTop from "../../../../../pipes/scrollToTop";

const ChooseService = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const dataDefault = useSelector(
    (state) => state.stateOfPage.stateOfPage.registration.steps.chooseAservice,
  );
  const navigate = useNavigate();
  const idOfEmployee = useSelector((state) => state.registration.idOfEmployee);
  const allServices = useSelector((state) => state.services.services);

  const [messageInTimeSending, setMessageInTimeSending] = useState(false);
  const servicesComponent = allServices
    .filter((service) => service.employees.indexOf(idOfEmployee) !== -1)
    .map((service, index) => (
      <Service data={service} key={index} index={index} />
    ));
  const totalSum = useSelector((state) => state.registration.totalPrice);
  const data = useSelector((state) => state.registration);
  const dispatch = useDispatch();

  useEffect(() => {
    if (idOfEmployee === 0) {
      toast.warn("Registration back to first step. No employee selected");
      navigate("/registration");
    }
  }, [idOfEmployee]);

  async function desplayChooseDate() {
    if (data.idOfServices.length === 0) {
      await toast.info("No service selected", { toastId: 0 });
      return;
    }

    setMessageInTimeSending(true);
    if (messageInTimeSending) return;
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
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setMessageInTimeSending(false);
      });
  }

  const noServices = <h3 className="messageWhenEmpty">No services</h3>;
  const containerForServices = (
    <>
      <table className={style.containerForServices}>
        <thead>
          <tr className={style.blockForHeadlines}>
            <td className={style.nr}>Nr</td>
            <th className={style.service}>Service</th>
            <th className={style.price}>Price</th>
            <th className={style.choose}>Choose</th>
          </tr>
        </thead>
        <tbody>{servicesComponent}</tbody>
      </table>
      <div className={style.bottomPart}>
        <span className={style.totalSum}>
          Total sum: {totalSum}
          <span className={style.greenSpanForMoney}>$</span>
        </span>
        <button
          className="nextBtn"
          disabled={messageInTimeSending}
          onClick={desplayChooseDate}
        >
          Next {messageInTimeSending}
        </button>
      </div>
    </>
  );

  return (
    <div className="containerInRegistration">
      <Back toEmployees={true} />
      <h4 className="mainTitle">{dataDefault.title}</h4>
      <Moustache />
      <p
        className="describeUnderTitle"
        dangerouslySetInnerHTML={{ __html: dataDefault.description }}
      ></p>
      {servicesComponent.length ? containerForServices : noServices}
    </div>
  );
};
export default ChooseService;
