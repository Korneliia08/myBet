import style from "./InformationaAboutEmployee.module.css";
import ArrowBack from "../../../../components/ArrowBack/ArrowBack";
import SocialMedias from "../../../../components/SocialMedias/SocialMedias";
import Moustache from "../../../../components/Moustache/Moustache";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import WorkingDays from "../../../../components/WorkingDays/WorkingDays";
import { useSelector } from "react-redux";

const InformationAboutEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const employees = useSelector((state) => state.employees.employees);

  const currentEmployee = employees.find((employee) => employee.id == id);

  if (!currentEmployee) {
    return <h3>loading....</h3>;
  }
  const imgEmployee =
    process.env.REACT_APP_IMAGE_LINK + currentEmployee.profilImageId;

  function desplayRegistration() {
    navigate(`/registration/employee/${currentEmployee.id}`);
  }

  let description = currentEmployee.description;
  if (!description) {
    description = "no description";
  }
  let numberPhone = currentEmployee.phoneNumber;
  if (numberPhone.length < 7) {
    numberPhone = "no number phone";
  }
  let email = currentEmployee.email;
  if (!email) {
    email = "no email";
  }

  return (
    <div className={style.blockInformationAboutEmployee}>
      <div className={style.blockForImg}>
        <img
          src={imgEmployee}
          alt="image of employee"
          className={style.image}
        />
      </div>
      <h3 className="mainTitle">
        {currentEmployee.firstname}
        &nbsp;
        {currentEmployee.lastname}
      </h3>
      <Moustache />
      <WorkingDays data={currentEmployee.workDay} />
      <p
        className="describeInInformationCard"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <div className={style.blockForContact}>
        <h4>Contact with me if you have any questions:</h4>
        <div className={style.blockForIconAndSpan}>
          <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
          <span>{email}</span>
        </div>
        <div className={style.blockForIconAndSpan}>
          <FontAwesomeIcon icon={faPhone} className={style.icon} />
          <span>{numberPhone}</span>
        </div>
      </div>
      <div className={style.blockForBtns}>
        <button className={style.btnWrite}>Write to me</button>
        <button className={style.btnBook} onClick={desplayRegistration}>
          Book a visit
        </button>
      </div>
      <SocialMedias data={currentEmployee.socialMedia} />
      <ArrowBack />
    </div>
  );
};
export default InformationAboutEmployee;
