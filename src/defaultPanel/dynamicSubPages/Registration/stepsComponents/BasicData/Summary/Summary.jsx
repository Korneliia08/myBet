import style from "./Summary.module.css";
import { useSelector } from "react-redux";
import { getHour } from "../../../../../../pipes/getHours";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.registration);

  const allEmployees = useSelector((state) => state.employees.employees);
  const selectedEmployee = allEmployees.find((employee) => {
    return employee.id === data.idOfEmployee;
  });

  const allServices = useSelector((state) => state.services.services);
  const selectedServices = allServices.filter((service) => {
    return data.idOfServices.some((selectedService) => {
      return selectedService === service.id;
    });
  });

  const titlesOfServices = selectedServices.map((selectService) => (
    <span>{selectService.title}</span>
  ));

  const selectedDate = data.selectedDate.start;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[new Date(selectedDate).getMonth()];
  const dayOfMonth = new Date(selectedDate).getDate();

  const start = data.selectedDate.start;
  const end = data.selectedDate.end;

  const totalPrice = data.totalPrice;

  if (!selectedEmployee || titlesOfServices.length < 1) {
    navigate("/");
    return;
  }
  return (
    <div className={style.container}>
      <div className={style.blockOfInformation}>
        <h5>Service/Services:</h5>
        {titlesOfServices}
      </div>
      <div className={style.blockOfInformation}>
        <h5>Employee:</h5>
        <span>
          {selectedEmployee.firstname} &nbsp;
          {selectedEmployee.lastname}
        </span>
      </div>
      <div className={style.blockOfInformation}>
        <h5>Date:</h5>
        <span>
          {month} {dayOfMonth}, ({getHour(start)} - {getHour(end)})
        </span>
      </div>
      <div className={style.blockOfInformation}>
        <h5>Total price:</h5>
        <span>{totalPrice} zł</span>
      </div>
    </div>
  );
};
export default Summary;
