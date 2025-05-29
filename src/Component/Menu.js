import React, { useState, useEffect } from "react";
import './Menu.css';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

function Menu() {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { id: "Home", icon: <IoHomeOutline /> },
    { id: "About", icon: <CiUser /> },
    { id: "Resume", icon: <IoDocumentTextOutline /> },
    { id: "Contact", icon: <CiMail /> },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // section is 60% in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup
    return () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="MenuSidebar">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className={`menuItem ${active === item.id ? "active" : ""}`}
          onClick={() => handleClick(item.id)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default Menu;
