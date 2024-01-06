import style from "./ServiceCard.module.css";
import {useNavigate} from "react-router-dom";
import {maxLenght} from "../../../../../pipes/maxLenght";

const ServiceCard = (props) => {
    const navigate = useNavigate();
    const data = props.data;
    const title = maxLenght(props.data.title, 50);
    const description = maxLenght(props.data.description, 100);
    const imageId = props.data.imageId ? props.data.imageId : 0;


    function desplaySubPage() {
        navigate(`service/${data.id}`);
    }

    return (
        <div className={style.container}>
            <div className={style.serviceCard}>
                <div className={style.blockForImage} onClick={desplaySubPage}>
                    <img src={`https://api.fenek.tech/files/image/${imageId}`}
                         alt={`image of service "${title}"`}
                         className={style.imageService}/>
                </div>
                <h3 className={style.title}>{title}</h3>
                <p className={style.describe}
                   dangerouslySetInnerHTML={{__html: description}}></p>
            </div>
        </div>
    )
}
export default ServiceCard;
