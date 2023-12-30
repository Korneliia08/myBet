import style from "./Content.module.css";
import {useNavigate} from "react-router-dom";
import Moustache from "../../../../components/Moustache/Moustache";

const Content = () => {
    const navigate = useNavigate();

    function displaySubPage() {
        navigate("/aboutUs");
    }

    return (
        <div className={style.containerForContent}>
            <h2 className="mainTitle">who we are</h2>
            <Moustache/>
            <p className={style.content}>Barbershop is a team of highly qualified barbers dedicated to offering the best
                value. We do this by
                providing high quality salon services for men and boys, in a warm, friendly atmosphere.</p>
            <button className={style.btnReadMore} onClick={displaySubPage}>Read more</button>
        </div>
    )
}
export default Content;
