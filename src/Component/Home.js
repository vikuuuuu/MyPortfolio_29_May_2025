import React, { useEffect, useRef } from "react";
import "./Home.css";
import ProfileImage from "./img/image vector.png";
import ProfilePic from "./img/1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faWhatsapp,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  FaCloud,
  FaShieldAlt,
  FaServer,
  FaNetworkWired,
  FaProjectDiagram,
  FaPython,
} from "react-icons/fa";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import APWebsite from "./img/ap website.png";
import APDashboard from "./img/AP Dashboard.jpeg";
import OnlineExam from "./img/onlineExam.png";
import MyPort from "./img/portfolio image.png";
import Calculator from "./img/Calculator image.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container" data-aos="fade-down">
      <Slider {...settings}>
        <div className="project-slide">
          <img src={OnlineExam} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">Online Exam Dashboard</h1>
          <p className="visit-website">
            Visit :-{" "}
            <a href="https://quizmasterr-eta.vercel.app/">Quiz Master</a>
          </p>
          <p className="project-details">
            I am Developing an online Examination Dashboard using React js,
            aiming for an intuitive user experience and real-time updates. The
            Project is still in progress and not yet completed.
          </p>
        </div>
        <div className="project-slide">
          <img src={APWebsite} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">ApnaBackup Website</h1>
          <p className="visit-website">
            Visit :- <a href="https://apnabackup.com">ApnaBackup Website</a>
          </p>
          <p className="project-details">
            I am Creating a project in React JS for a Software Website named
            ApnaBackup. This Project aims to provide a comprehensive solution
            for data backup and recovery.
          </p>
        </div>
        <div className="project-slide">
          <img src={APDashboard} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">ApnaBackup Dashboard</h1>
          <p className="visit-website">Visit :- Not Available</p>
          <p className="project-details">
            ApnaBackup Website is a business-oriented backup Software that
            offers real-time data protection and secure cloud storage. The
            Project is still in progress and not yet completed.
          </p>
        </div>

        <div className="project-slide">
          <img src={MyPort} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">My Portfolio</h1>
          <p className="visit-website">
            Visit :- <a href="/">Personal Portfolio</a>
          </p>
          <p className="project-details">
            I Create a project in React Js for my Personal Portfolio. This
            project will showcase my skills, project and experience in front-end
            Development.
          </p>
        </div>
        <div className="project-slide">
          <img src={Calculator} alt="ProjectImage" className="project-image" />
          <h1 className="project-heading-name">Calculator Project</h1>
          <p className="visit-website">
            Visit :-{" "}
            <a href="https://calculator-vikuu.vercel.app/">
              Calculator Project
            </a>
          </p>
          <p className="project-details">
            I built a project with a calculator and age calculator using HTML,
            CSS, and JavaScript, where JavaScript functions manage button
            interactions, calculations, and result displays.
          </p>
        </div>
      </Slider>
    </div>
  );
};

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

  const handleDownload = () => {
    // Replace this with the actual file URL or path
    const fileUrl = "/Vikash Sharma Resume II.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Vikash Sharma Resume II.pdf"; // Name the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <a
                href="https://www.linkedin.com/in/vikash-sharma-48b27a263/"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faLinkedinIn} className="twitter" />{" "}
              </a>{" "}
              <a href="https://github.com/vikuuuuu" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faGithub} className="twitter" />
              </a>
              <a href="https://x.com/vikashsrma" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faXTwitter} className="twitter" />{" "}
              </a>
              <a
                href="https://wa.me/919571404881?text=Hello%2C%20Vikash%20Sharma"
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faWhatsapp} className="twitter" />{" "}
              </a>
            </div>
          </div>
          <img className="Profile" src={ProfileImage} alt="Profile" />
        </section>
        <section className="About" id="About">
          <div className="AboutContainer-Box">
            <div className="Aboutbox1">
              <img src={ProfilePic} alt="ProfilePic" />
            </div>
            <div className="Aboutbox2">
              <h1 className="AboutTitle" data-aos="fade-down">
                About Me
              </h1>
              <p className="AboutDetails">
                I'm a frontend web developer and graphic designer who blends
                code and creativity to build engaging, user-friendly websites. I
                use tools like React.js and Svelte.js to turn ideas into smooth,
                eye-catching digital experiences.
              </p>
              <button className="Resumebtn" onClick={handleDownload}>
                {" "}
                Resume
                <MdOutlineFileDownload className="downloadbtn" />
              </button>
            </div>
          </div>
        </section>
        <section className="Skills" id="Skills">
          <h1 className="SkillsTitle" data-aos="fade-down">
            Technical Skills
          </h1>
          <div className="SkillsContainer">
            <div className="SkillItem">
              <div className="SkillLabel">
                <span>HTML</span>
                <span>80%</span>
              </div>
              <div className="SkillBar">
                <div className="SkillProgress" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="SkillItem">
              <div className="SkillLabel">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div className="SkillBar">
                <div className="SkillProgress" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="SkillItem">
              <div className="SkillLabel">
                <span>JavaScript</span>
                <span>40%</span>
              </div>
              <div className="SkillBar">
                <div className="SkillProgress" style={{ width: "40%" }}></div>
              </div>
            </div>

            <div className="SkillItem">
              <div className="SkillLabel">
                <span>React.js</span>
                <span>70%</span>
              </div>
              <div className="SkillBar">
                <div className="SkillProgress" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="SkillItem">
              <div className="SkillLabel">
                <span>Next Js</span>
                <span>30%</span>
              </div>
              <div className="SkillBar">
                <div className="SkillProgress" style={{ width: "30%" }}></div>
              </div>
            </div>
            <div className="SkillItem">
              <div className="SkillLabel">
                <span>Tailwind CSS</span>
                <span>25%</span>
              </div>
              <div className="SkillBar">
                <div className="SkillProgress" style={{ width: "25%" }}></div>
              </div>
            </div>
            <div className="SkillItem">
              <div className="SkillLabel">
                <span>Cloud Computing</span>
                <span>45%</span>
              </div>
              <div className="SkillBar">
                <div className="SkillProgress" style={{ width: "45%" }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="Education" id="Education">
          <h1 className="EducationTitle" data-aos="fade-down">
            Education
          </h1>
          <div className="EducationContainer">
            <div className="EducationCard">
              <h2 className="Degree">Bachelor of Vocational [B.Voc]</h2>
              <h3 className="University">
                Bhartiya Skill Development University, Jaipur
              </h3>
              <p className="Year">2021 – 2024</p>

              <h4 className="CourseworkTitle">Relevant Coursework</h4>
              <div className="CourseworkList">
                <div className="CourseCard">
                  <div className="CourseIconBox">
                    <FaCloud className="CourseIcon" />
                  </div>
                  <h4>Cloud Computing</h4>
                  <p>
                    Learned about cloud infrastructure, virtualization, and
                    deployment models using platforms like AWS and Azure.
                  </p>
                </div>

                <div className="CourseCard">
                  <div className="CourseIconBox">
                    <FaShieldAlt className="CourseIcon" />
                  </div>
                  <h4>Cyber Security</h4>
                  <p>
                    Gained knowledge of network security, firewalls, threat
                    analysis, and ethical hacking practices.
                  </p>
                </div>

                <div className="CourseCard">
                  <div className="CourseIconBox">
                    <FaServer className="CourseIcon" />
                  </div>
                  <h4>Windows Server Administration</h4>
                  <p>
                    Worked with Windows Server to configure Active Directory,
                    user permissions, and network roles.
                  </p>
                </div>

                <div className="CourseCard">
                  <div className="CourseIconBox">
                    <FaNetworkWired className="CourseIcon" />
                  </div>
                  <h4>Computer Networking</h4>
                  <p>
                    Studied OSI model, IP addressing, routing, switching, and
                    basic troubleshooting techniques.
                  </p>
                </div>

                <div className="CourseCard">
                  <div className="CourseIconBox">
                    <FaProjectDiagram className="CourseIcon" />
                  </div>
                  <h4>Network Designing</h4>
                  <p>
                    Learned to design and plan scalable and secure network
                    infrastructures using simulation tools.
                  </p>
                </div>

                <div className="CourseCard">
                  <div className="CourseIconBox">
                    <FaPython className="CourseIcon" />
                  </div>
                  <h4>Python Programming</h4>
                  <p>
                    Developed applications using Python, focusing on functions,
                    data structures, and automation scripts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Project" id="Project">
          <h1 className="ProjectTitle" data-aos="fade-down">
            Projects
          </h1>
          <Carousel />
        </section>
        <section className="contact-section">
          <div className="contact-container">
            <h2 className="contact-title">Contact</h2>
            <div className="contact-grid">
              {/* Contact Info */}
              <div className="contact-info">
                <div className="info-block">
                  <div className="icon-circle">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>Jaipur, Rajasthan 302026</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="icon-circle">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>

                <div className="info-block">
                  <div className="icon-circle">
                    <CiMail />{" "}
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="contact-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea rows="6" placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
