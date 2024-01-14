import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
      <h3 className="titleInFooter">Contact</h3>
      <span className={`${style.address} contentInFooter`}>
        info@example.com
      </span>
      <span className={`${style.phone} contentInFooter`}>
        (+123) 456 789 101
      </span>
    </div>
  );
};
export default Contact;
