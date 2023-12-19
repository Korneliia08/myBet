import style from "./ContainerForPhotos.module.css";
import img1 from "../../../assets/men1.jpeg";
import img2 from "../../../assets/men2.jpeg";
import img3 from "../../../assets/men3.jpeg";

const ContainerForPhotos = () => {
    return (
        <div className={style.containerForImages}>
            <div className={style.blockForImage}>
                <img src={img1} alt="image of man"/>
            </div>
            <div className={style.blockForImage}>
                <img src={img2} alt="image of man"/>
            </div>
            <div className={style.blockForImage}>
                <img src={img3} alt="image of man"/>
            </div>
        </div>
    )
}
export default ContainerForPhotos;
