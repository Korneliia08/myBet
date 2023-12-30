import style from "./AllAboutUs.module.css";
import ArrowBack from "../../components/ArrowBack/ArrowBack";
import image from "../../assets/images/aboutUs.jpg";
import Moustache from "../../components/Moustache/Moustache";

const AllAboutUs = () => {
    return (
        <section className={style.section}>
            <h2 className="mainTitle">About Us</h2>
            <Moustache/>
            <img src={image} alt="image about us" className={style.image}/>
            <p className={style.content}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et natus pariatur reiciendis reprehenderit
                totam, voluptatibus voluptatum! Alias aliquam blanditiis consectetur corporis distinctio dolore
                doloremque eligendi expedita facilis illo incidunt necessitatibus nemo nesciunt praesentium, saepe sint
                totam velit veritatis? Libero magni nisi optio quaerat saepe? Aliquam amet at blanditiis consectetur
                delectus dolores enim esse est ex explicabo fugiat iste magni modi neque quam qui quos, repellat sed
                sunt tenetur unde, velit veniam vero? Alias aliquam assumenda iure magnam maiores modi, molestias
                nesciunt nostrum perspiciatis praesentium quibusdam quis sint sit soluta tempore. In magni nisi nobis. A
                aliquam aspernatur autem nulla sed!
            </p>
            <ArrowBack/>
        </section>
    )
}
export default AllAboutUs;
