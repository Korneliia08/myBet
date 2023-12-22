import style from "./Map.module.css";

const Map = () => {
    return (
        <div className={style.container}>
            <h3>Map</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41204.02163705702!2d23.108452997006005!3d49.800142048278865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b730244f4e7c5%3A0x8749ac7e99de7b14!2zTW_Fm2Npc2thLCBPYnfDs2QgbHdvd3NraQ!5e0!3m2!1spl!2sua!4v1703277556699!5m2!1spl!2sua"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
export default Map;
