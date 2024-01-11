import style from "./CardEmployee.module.css";
import { useNavigate } from "react-router-dom";
import SocialMedias from "../../../../components/SocialMedias/SocialMedias";
import { maxLenght } from "../../../../../pipes/maxLenght";

const CardEmployee = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const image = `${process.env.REACT_APP_IMAGE_LINK}${
    !data.profilImageId ? 0 : data.profilImageId
  }`;

  function displayInfoAboutEmployee() {
    navigate(`/allEmployees/${data.id}`);
  }

  if (!data) {
    return "loading";
  }
  let description = data.description;
  if (!description) {
    description = "no description";
  }
  return (
    <div className={style.cardOfEmployee} onClick={displayInfoAboutEmployee}>
      <div className={style.containerForImage}>
        <img
          src={image}
          alt={`image of employee ${data.firstName} ${data.lastName}`}
        />
        <img src={image} alt="" />
      </div>
      <div className={style.containerForInformation}>
        <h3 className="nameSurname">
          {data.firstname} {data.lastname}
        </h3>
        <p
          className={style.information}
          dangerouslySetInnerHTML={{ __html: maxLenght(description, 100) }}
        ></p>
        <SocialMedias data={data.socialMedia} />
      </div>
    </div>
  );
};
export default CardEmployee;
