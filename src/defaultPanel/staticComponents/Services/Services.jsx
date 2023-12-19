import style from "./Services.module.css";

const Services = () => {
    return (
        <section className={style.container}>
            <div className={style.blockForTitle}>
                <h2>Our Barber Services</h2>
            </div>
            <div className={style.containerForServicesCard}>
                <div className={style.serviceCard}>
                    <div>sfbh</div>
                    <h3 className={style.title}>Title</h3>
                    <p className={style.describe}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
                        sint, voluptates! Assumenda
                        dolorum ex minima!</p>
                </div>
                <div className={style.serviceCard}>
                    <div>sfbh</div>
                    <h3 className={style.title}>Title</h3>
                    <p className={style.describe}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
                        sint, voluptates! Assumenda
                        dolorum ex minima!</p>
                </div>
                <div className={style.serviceCard}>
                    <div>sfbh</div>
                    <h3 className={style.title}>Title</h3>
                    <p className={style.describe}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
                        sint, voluptates! Assumenda
                        dolorum ex minima!</p>
                </div>
                <div className={style.serviceCard}>
                    <div>sfbh</div>
                    <h3 className={style.title}>Title</h3>
                    <p className={style.describe}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
                        sint, voluptates! Assumenda
                        dolorum ex minima!</p>
                </div>
            </div>
        </section>
    )
}
export default Services;
