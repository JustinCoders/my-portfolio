import style from "./Header.module.css";
import { SquareMenu, SquareX } from "lucide-react";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const {
    header,
    nav,
    logoContainer,
    logo,
    navLink,
    hamburger,
    toggleIcon,
    navLinks,
    showMenu,
    container,
    headerInfo,
    myName,
    myResume
  } = style;

  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false); // ← Add this

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={header}>
      {/* 🧠 Use motion.nav with animated style */}
      <motion.nav
        className={nav}
        initial={false}
        animate={{
          padding: isShrunk && window.innerWidth > 768 ? "10px 6%" : "20px 6%",
          transition: { duration: 0.3 }
        }}
      >
        <div className={logoContainer}>
          <img className={logo} src="logo-img.png" alt="Site logo" />
        </div>

        <ul className={`${navLinks} ${isOpen ? showMenu : ""}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className={navLink}
              onClick={() => setIsOpen(false)} // ✅ Add this
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className={navLink}
              onClick={() => setIsOpen(false)} // ✅ Add this
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              offset={-70}
              className={navLink}
              onClick={() => setIsOpen(false)} // ✅ Add this
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className={navLink}
              onClick={() => setIsOpen(false)} // ✅ Add this
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className={hamburger}>
          {isOpen ? (
            <SquareX className={toggleIcon} onClick={toggleMenu} />
          ) : (
            <SquareMenu className={toggleIcon} onClick={toggleMenu} />
          )}
        </div>
      </motion.nav>

      <div className={container} id="home">
        <div className={headerInfo}>
          <h1 className={myName}>I'M</h1>
          <h1 className={myName}>JUSTIN PADILLA</h1>
        </div>

        <div>
          <h3 style={{ color: "white", fontWeight: 200, marginBottom: 10 }}>
            <Typewriter
              words={[
                "<Full Stack Developer />",
                "<Front-End Developer />",
                "<Back-End Developer />"
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </h3>
        </div>

        <div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=justinpadilla682@gmail.com&su=Request%20for%20Resume&body=What%20is%20the%20purpose%20of%20requesting%20my%20resume%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={myResume}>Request CV</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
