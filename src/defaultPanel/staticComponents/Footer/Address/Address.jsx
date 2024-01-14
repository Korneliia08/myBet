import style from "./Address.module.css";

const Address = (props) => {
  const data = props.data;
  return (
    <div className={style.container}>
      <h3 className="titleInFooter">{data.title}</h3>
      <span className={`${style.address} contentInFooter`}>
        {data.city}, {data.street} {data.numberOfApartment}/{data.numberOfLocal}
        ,{data.country} <br />
        {data.zipCode}
      </span>
    </div>
  );
};
export default Address;
