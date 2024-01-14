import style from "./Contact.module.css";

const Contact = (props) => {
  const data = props.data;
  return (
    <div className={style.container}>
      <h3 className="titleInFooter">{data.title}</h3>
      <span className={`${style.address} contentInFooter`}>{data.email}</span>
      <span className={`${style.phone} contentInFooter`}>
        {data.numberOfPhone}
      </span>
    </div>
  );
};
export default Contact;
