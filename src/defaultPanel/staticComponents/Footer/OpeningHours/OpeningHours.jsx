import style from "./OpeningHours.module.css";

const OpeningHours = () => {
  return (
    <div className={style.container}>
      <h3 className="titleInFooter">Opening Hours</h3>
      <div className={style.block}>
        <span className="contentInFooter">Monday - Friday:</span>
        <span className={`${style.hours} contentInFooter`}>
          11:30am - 2:30pm
        </span>
      </div>
      <div className={style.block}>
        <span className="contentInFooter">Saturday – Monday:</span>
        <span className={`${style.hours} contentInFooter`}>9am – 8pm</span>
      </div>
    </div>
  );
};
export default OpeningHours;
