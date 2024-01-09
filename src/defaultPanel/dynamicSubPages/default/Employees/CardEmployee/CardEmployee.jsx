import style from "./CardEmployee.module.css";
import {useNavigate} from "react-router-dom";
import SocialMedias from "../../../../components/SocialMedias/SocialMedias";
import {maxLenght} from "../../../../../pipes/maxLenght";

const CardEmployee = (props) => {
    const navigate = useNavigate();
    const data = props.data;
    const image = `https://api.fenek.tech/pliki/image/${!data.profilImageId ? 0 : data.profilImageId}`;


    function displayInfoAboutEmployee() {
        navigate("/currentEmployee");
    }

    if (!data) {
        return "loading";
    }

    return (
        <div className={style.cardOfEmployee} onClick={displayInfoAboutEmployee}>
            <div className={style.containerForImage}>
                <img src={image} alt={`image of employee ${data.firstName} ${data.lastName}`}/>
                <img src={image} alt=""/>
            </div>
            <div className={style.containerForInformation}>
                <h3 className="nameSurname">{data.firstname} {data.lastname}</h3>
                <p className={style.information}
                   dangerouslySetInnerHTML={{__html: maxLenght(data.description, 100)}}></p>
                <SocialMedias/>
            </div>
        </div>
    )
}
export default CardEmployee;
