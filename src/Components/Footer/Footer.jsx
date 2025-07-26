import style from "../Footer/Footer.module.css";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  const {
    footerContent,
    logoContainer,
    logo,
    footerName,
    footerNav,
    socialContainer,
    socialIcon,
    lineHr
  } = style;

  const year = new Date().getFullYear();

  return (
    <div className={footerContent}>
      <div className={logoContainer}>
        <div>
          <img className={logo} src="logo-img.png" alt="Logo" />
        </div>
        <h1 className={footerName}>JUSTIN PADILLA</h1>
        <ul className={footerNav}>
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Project</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
        </ul>
        <div className={socialContainer}>
          <a
            href="https://www.linkedin.com/in/justin-padilla-a81355377"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={socialIcon} />
          </a>

          <a
            href="https://github.com/JustinCoders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className={socialIcon} />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=justinpadilla682@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail className={socialIcon} />
          </a>

          <a
            href="https://www.facebook.com/justinpadilla88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className={socialIcon} />
          </a>
        </div>

        <div className={lineHr}></div>
        <p style={{ textAlign: "center" }}>
          &copy; {year} Justin Padilla. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
