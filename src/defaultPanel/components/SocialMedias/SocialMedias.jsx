import style from "./SocialMedias.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareInstagram,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedias = (props) => {
  const socialMedias = props.data;
  if (!socialMedias) {
    return <h3>loading....</h3>;
  }

  function setSocialIcon(link, icon, nameOfClass) {
    if (link && link.length > 0) {
      return (
        <a href={link} target="_blank">
          <FontAwesomeIcon
            icon={icon}
            className={`${style.icon} ${nameOfClass}`}
          />
        </a>
      );
    } else {
      return "";
    }
  }

  return (
    <div className={style.containerForIcons}>
      {setSocialIcon(socialMedias.facebook, faFacebook, style.fb)}
      {setSocialIcon(socialMedias.instagram, faSquareInstagram, style.insta)}
      {setSocialIcon(socialMedias.telegram, faTelegram, style.telegram)}
      {setSocialIcon(socialMedias.twitter, faTwitter, style.twitter)}
      {setSocialIcon(socialMedias.whatsapp, faWhatsapp, style.whatsapp)}
    </div>
  );
};
export default SocialMedias;
