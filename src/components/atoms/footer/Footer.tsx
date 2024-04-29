import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import GradientText from "../GradientText";
import "./Footer.css";

const Footer = () => {
  const LinkedinUrl = "https://www.linkedin.com";
  const InstagramUrl = "https://www.instagram.com/";
  const FacebookUrl = "https://www.facebook.com/";
  return (
    <div className="footer-container">
      <div className="flex gap-12">
        <a href={LinkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} className="social-icons" />
        </a>
        <a href={InstagramUrl} target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare size={40} className="social-icons" />
        </a>
        <a href={FacebookUrl} target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare size={40} className="social-icons" />
        </a>
      </div>
      <div className="footer-text-container ">
        <GradientText
          className="footer-text"
          text="Latest Word News..."
        ></GradientText>
      </div>
    </div>
  );
};
export default Footer;
