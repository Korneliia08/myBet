import style from "./Services.module.css";
import haircurtService from "../../../assets/images/haircutService.jpg";
import beardTriming from "../../../assets/images/beardTriming.jpg";
import cleanShave from "../../../assets/images/cleanShave.jpg";
import faceMasking from "../../../assets/images/faceMasking.jpg";

const Services = () => {
    return (
        <section className={style.container}>
            <div className={style.blockForTitle}>
                <h2 className="mainTitle">Our Barber Services</h2>
            </div>
            <div className={style.containerForServicesCard}>
                <div className={style.serviceCard}>
                    <div className={style.blockForImage}>
                        <img src={haircurtService} alt="haircurt service image" className={style.imageService}/>
                    </div>
                    <h3 className={style.title}>Haircut Styles</h3>
                    <p className={style.describe}>Barber is a person whose occupation is mainly to cut dress style.</p>
                </div>
                <div className={style.serviceCard}>
                    <div className={style.blockForImage}>
                        <img src={beardTriming} alt="beard triming image" className={style.imageService}/>
                    </div>
                    <h3 className={style.title}>Beard Triming</h3>
                    <p className={style.describe}>Barber is a person whose occupation is mainly to cut dress style.</p>
                </div>
                <div className={style.serviceCard}>
                    <div className={style.blockForImage}>
                        <img src={cleanShave} alt="clean shave image" className={style.imageService}/>
                    </div>
                    <h3 className={style.title}>Clean Smooth Shave</h3>
                    <p className={style.describe}>Barber is a person whose occupation is mainly to cut dress style.</p>
                </div>
                <div className={style.serviceCard}>
                    <div className={style.blockForImage}>
                        <img src={faceMasking} alt="face masking image" className={style.imageService}/>
                    </div>
                    <h3 className={style.title}>Face Masking</h3>
                    <p className={style.describe}>Barber is a person whose occupation is mainly to cut dress style.</p>
                </div>
            </div>
        </section>
    )
}
export default Services;
