import style from "./WriteToUs.module.css";
import backgroundImage from "../../assets/backgroundWriteToUs.jpg";

const WriteToUs = () => {
    return (
        <section className={style.container}>
            <img src={backgroundImage} alt="image of backgorund" className={style.image}/>
            <div className={style.blockForForm}>
                <h3 className={style.title}>Get In Touch</h3>
                <p className={style.content}>Leave your name and phone number, and we’ll contact you.</p>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Surname"/>
                    <input type="email" placeholder="E-mail"/>
                    <div className={style.groupe}>
                        <select>
                            <option value="+48">+48</option>
                            <option value="+380">+380</option>
                        </select>
                        <input type="text" placeholder="Phone"/>
                    </div>
                    <input type="submit" value="send request" className={style.submit}/>
                </form>
            </div>
        </section>
    )
}
export default WriteToUs;
