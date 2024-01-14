import style from "./Describe.module.css";

const Describe = () => {
  return (
    <div className={style.container}>
      <h3 className="titleInFooter">
        Sali<span>o</span>n.
      </h3>
      <p className={`${style.describe} contentInFooter`}>
        Our barbershop is the created for men who appreciate premium quality,
        time and flawless look.
      </p>
    </div>
  );
};
export default Describe;
