import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={style.topPartFooter}>
                top
            </div>
            <div className={style.bottomPartFooter}>
                bottom
            </div>
        </footer>
    )
}
export default Footer;
