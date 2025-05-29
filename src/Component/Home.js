import React, { useEffect, useRef } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faWhatsapp,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  // Start the typing Codee
  const typingTimeoutRef = useRef(null);
  const erasingTimeoutRef = useRef(null);
  const currentTextIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);

  useEffect(() => {
    const textElement = document.getElementById("Typing");
    const texts = ["Front-end Developer 💻", "Graphic Designer 🎨"];
    const typingSpeed = 100;
    const delayBetweenTexts = 1000;

    function type() {
      const currentTextIndex = currentTextIndexRef.current;
      const currentCharIndex = currentCharIndexRef.current;

      if (currentCharIndex < texts[currentTextIndex].length) {
        textElement.textContent +=
          texts[currentTextIndex].charAt(currentCharIndex);
        currentCharIndexRef.current += 1;
        typingTimeoutRef.current = setTimeout(type, typingSpeed);
      } else {
        erasingTimeoutRef.current = setTimeout(erase, delayBetweenTexts);
      }
    }

    function erase() {
      const currentTextIndex = currentTextIndexRef.current;
      const currentCharIndex = currentCharIndexRef.current;

      if (currentCharIndex > 0) {
        textElement.textContent = texts[currentTextIndex].substring(
          0,
          currentCharIndex - 1
        );
        currentCharIndexRef.current -= 1;
        erasingTimeoutRef.current = setTimeout(erase, typingSpeed);
      } else {
        currentTextIndexRef.current = (currentTextIndex + 1) % texts.length;
        currentCharIndexRef.current = 0;
        typingTimeoutRef.current = setTimeout(type, typingSpeed);
      }
    }

    type();

    // Cleanup function to clear timeouts if the component unmounts
    return () => {
      clearTimeout(typingTimeoutRef.current);
      clearTimeout(erasingTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <main className="main">
        <section className="Home" id="Home">
          <div className="ProfileContainer">
            <div className="ProfileName1">Vikash Sharma</div>
            <div className="ProfileName2">
              I'm <span id="Typing" className="Typing"></span>
            </div>
            <div className="ProfileIcon">
              <a href="https://www.linkedin.com/in/vikash-sharma-48b27a263/" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faLinkedinIn} className="twitter" />{" "}
              </a>{" "}
              <a href="https://github.com/vikuuuuu" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faGithub} className="twitter"/>
              </a>
              <a href="https://x.com/vikashsrma" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faXTwitter} className="twitter" />{" "}
              </a>
              <a href="https://wa.me/919571404881?text=Hello%2C%20Vikash%20Sharma" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faWhatsapp} className="twitter"/>{" "}
              </a>
            </div>
          </div>
          <img className="Profile" src={Image} alt="Profile" />
        </section>
        <section className="About" id="About">
          <h1 className="AboutTitle" data-aos="fade-down">
            About Me
          </h1>
          <div className="AboutContaienr">
            <div className="AboutDetails" data-aos="fade-down">
              <p>
                I'm a frontend web developer and graphic designer, adept at
                weaving together code, design, and creative solutions to craft
                captivating digital experiences. With a strong foundation in
                React.js and Svelte.js, I specialize in bringing websites to
                life through innovative problem-solving and meticulous attention
                to detail. My journey is fueled by a passion for transforming
                ideas into user-friendly interfaces that engage and inspire. By
                seamlessly integrating frontend and design principles, I aim to
                create memorable online experiences that resonate with
                audiences. Let's collaborate and bring your vision to reality
                with cutting-edge technology and thoughtful design.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
