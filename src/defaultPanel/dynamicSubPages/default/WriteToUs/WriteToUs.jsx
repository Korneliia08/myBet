import style from "./WriteToUs.module.css";
import backgroundImage from "../../../assets/images/backgroundWriteToUs.jpg";
import Moustache from "../../../components/Moustache/Moustache";

const WriteToUs = () => {
    return (
        <section className={style.container}>
            <img src={backgroundImage} alt="image of backgorund" className={style.image}/>
            <div className={style.blockForForm}>
                <h2 className="mainTitle">Get In Touch</h2>
                <Moustache/>
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
                    <textarea placeholder="Message"></textarea>
                    <input type="submit" value="send request" className={style.submit}/>
                </form>
            </div>
        </section>
    )
}
export default WriteToUs;
