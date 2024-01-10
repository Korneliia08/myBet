import style from "./CardEmployee.module.css";
import { useNavigate } from "react-router-dom";
import SocialMedias from "../../../components/SocialMedias/SocialMedias";
import { maxLenght } from "../../../../pipes/maxLenght";

const CardEmployee = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const image = `https://api.fenek.tech/files/image/${
    data.profilImageId ? data.profilImageId : 0
  }`;

  function displayCurrentEmployee() {
    navigate(`/allEmployees/${data.id}`);
  }

  return (
    <div className={style.cardEmployee} onClick={displayCurrentEmployee}>
      <div className={style.containerForImages}>
        <img
          src={image}
          alt={`image of employee ${data.firstname} ${data.lastname}`}
        />
        <img
          src={image}
          className={
            data.profilImageId
              ? style.background
              : `${style.background} ${style.back}`
          }
        />
      </div>
      <div className={style.containerForInformation}>
        <h3 className="nameSurname">
          {data.firstname} {data.lastname}
        </h3>
        <p
          className={`${style.describe} describeInInformationCard`}
          dangerouslySetInnerHTML={{ __html: maxLenght(data.description, 120) }}
        ></p>
        <SocialMedias />
      </div>
    </div>
  );
};
export default CardEmployee;
