import style from "./Content.module.css";
import { useNavigate } from "react-router-dom";
import Moustache from "../../../../components/Moustache/Moustache";

const Content = (props) => {
  const navigate = useNavigate();
  const data = props.data;

  function displaySubPage() {
    navigate("/aboutUs");
  }

  return (
    <div className={style.containerForContent}>
      <h2 className="mainTitle">{data.title}</h2>
      <Moustache />
      <p
        className={style.content}
        dangerouslySetInnerHTML={{ __html: data.shortDescription }}
      ></p>
      <button className={style.btnReadMore} onClick={displaySubPage}>
        Read more
      </button>
    </div>
  );
};
export default Content;
