import style from "./DateCard.module.css";
import { useEffect, useState } from "react";
import Day from "./Day/Day";
import { useSelector } from "react-redux";
import Hour from "./Hour/Hour";
import Slider from "react-slick";

const DateCard = () => {
  const date = new Date();
  const [allDays, setAllDays] = useState([]);
  const availableDates = useSelector(
    (state) => state.registration.availableDates,
  );
  const selectedDate = useSelector((state) => state.registration.selectedDay);

  function createDays() {
    let index = 0;

    const tmp = [];
    for (; index < 14; index++) {
      const datePlusIndex = new Date().setDate(date.getDate() + index);
      tmp.push(new Date(datePlusIndex));
    }
    setAllDays(tmp);
  }

  const days = allDays
    .filter((day) => {
      return availableDates.some((availableDate) => {
        const start = new Date(availableDate.start);
        return (
          start.getDate() === day.getDate() &&
          start.getMonth() === day.getMonth() &&
          start.getFullYear() === day.getFullYear()
        );
      });
    })
    .map((day, index) => <Day data={day} key={index} />);

  const hours = availableDates
    .filter((date) => {
      return (
        new Date(date.start).getDate() === new Date(selectedDate).getDate() &&
        new Date(date.start).getMonth() === new Date(selectedDate).getMonth() &&
        new Date(date.start).getFullYear() ===
          new Date(selectedDate).getFullYear()
      );
    })
    .map((date, index) => <Hour data={date} key={index} />);

  useEffect(() => {
    createDays();
  }, []);
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <>
      <h5 className={style.month}>September</h5>
      <div className={style.containerForDays}>
        <Slider {...settings}>{days}</Slider>
      </div>
      <div className={style.containerForHours}>
        <Slider {...settings}>{hours}</Slider>
      </div>
    </>
  );
};
export default DateCard;
