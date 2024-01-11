import style from "./CardEmployee.module.css";
import { useNavigate } from "react-router-dom";
import SocialMedias from "../../../components/SocialMedias/SocialMedias";
import { maxLenght } from "../../../../pipes/maxLenght";

const CardEmployee = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const image = `${process.env.REACT_APP_IMAGE_LINK}${
    data.profilImageId ? data.profilImageId : 0
  }`;

  function displayCurrentEmployee() {
    navigate(`/allEmployees/${data.id}`);
  }

  let description = data.description;
  if (!description) {
    description = "no description";
  }

  return (
    <div className={style.cardEmployee} onClick={displayCurrentEmployee}>
      <div
        className={`${style.containerForImages} ${
          data.profilImageId ? "" : style.darker
        }`}
      >
        <img
          src={image}
          alt={`image of employee ${data.firstname} ${data.lastname}`}
        />
        <img src={image} className={style.background} />
      </div>
      <div className={style.containerForInformation}>
        <h3 className="nameSurname">
          {data.firstname} {data.lastname}
        </h3>
        <p
          className={`${style.describe} describeInInformationCard`}
          dangerouslySetInnerHTML={{ __html: maxLenght(description, 120) }}
        ></p>
        <SocialMedias data={data.socialMedia} />
      </div>
    </div>
  );
};
export default CardEmployee;
