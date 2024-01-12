import Nav from "./Nav/Nav";
import style from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const data = useSelector((state) => state.stateOfPage.stateOfPage.header);

  function displayRegistration() {
    navigate("/registration");
  }

  return (
    <header className={style.header}>
      <Nav />
      {location.pathname == "/" ? (
        <div className={style.container}>
          <h1 className={style.title}>{data.title}</h1>
          <p
            className={style.content}
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></p>
          <button className={style.btnBookNow} onClick={displayRegistration}>
            Book now
          </button>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};
export default Header;
