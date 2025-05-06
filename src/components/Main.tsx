import React from "react";
import "../assets/styles/Main.scss";
import image from "../assets/images/1.jpeg";
import instagramIcon from "../assets/images/Instagram.svg";
import Github from "../assets/images/Github.svg";
import Linkedin from "../assets/images/Linkedin.svg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={image}
            alt="Thoriq"
            style={{
              width: 160,
              height: 160,
              borderRadius: "50%",
              objectFit: "cover",
            }}
            className="profile-image-mobile"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.instagram.com/raffithoriq/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-1 h-1 transition-all duration-300 ease-in-out group-hover:filter group-hover:invert group-hover:brightness-150"
              />
            </a>
            <a
              href="https://github.com/raffithoriq"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <img
                src={Github}
                alt="Instagram"
                className=" transition-all duration-300 ease-in-out group-hover:filter group-hover:invert group-hover:brightness-150"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/raffi-thoriq/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <img
                src={Linkedin}
                alt="Instagram"
                className="w-1 h-1 transition-all duration-300 ease-in-out group-hover:filter group-hover:invert group-hover:brightness-150"
              />
            </a>
          </div>
          <h1>Achmad Roffi Thoriq</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a
              href="https://www.instagram.com/raffithoriq/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                style={{ width: 24, height: 24 }}
              />
            </a>
            <a
              href="https://github.com/raffithoriq"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Github}
                alt="Instagram"
                style={{ width: 24, height: 24 }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/raffi-thoriq/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Linkedin}
                alt="Instagram"
                style={{ width: 24, height: 24 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
