import style from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={style.container}>
            <h3>Contact</h3>
            <span className={style.email}>info@example.com</span>
            <span className={style.phone}>(+123) 456 789 101</span>
        </div>
    )
}
export default Contact;
